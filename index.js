const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const { getDate } = require('./utils/helper.js')
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

mongoose = require('mongoose');
require('./models/Email');
mongoose.connect(keys.mongoURI);

const Email = require('./models/Email');


app.post('/api/save-new-email', async (req, res) => {
  // console.log(req.body.state);

  //take in state json data
  const { fileName } = req.body.state;
  const { state } = req.body;

  //get current date
  const { getDate } = require('./utils/helper.js')
  const today = getDate();

  //TODO make sure fileName is not already taken!
  await Email.findOne({ fileName }, async (err, foundItem) => {
    if (err) {
      console.log(error)
    } else {
      if (foundItem) {
        console.log('found item');
        res.send('This filename is already being used!');
      } else {
        console.log('not found');
        //save to mongo
        const email = new Email({
          fileName,
          state,
          lastUpdated: today
        })
        //send back success message.
        try {
          await email.save();
          res.send('success');
        } catch (err) {
          res.status(422).send(err);
        }
      }
    }
  })
});

app.put('/api/update-email', async (req, res) => {
  const { fileName } = req.body.state;
  Email.findOne({ fileName }, function (err, foundObject) {
    if (err) {
      res.send('error has occured');
    } else {
      foundObject.state = req.body.state;
      foundObject.save();
    }
  });
});

app.get('/api/file-load', (req, res) => {
  Email.find({}).exec(function (err, files) {
    if (err) {
      res.send('error has occured');
    } else {
      res.json(files);
    }
  });
});

app.delete('/api/delete-email', async (req, res) => {
  //find record

  //delete record
  let { fileName } = req.body;


  await Email.find({ fileName }).remove(() => { console.log('The record is deleted.') });
  res.status(204).end();
});

app.get('/api/load-email', (req, res) => {
  Email.find({ fileName })
  //read pull data from mongo
  //send back json data
  console.log(req.body);
});

if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assets
  //like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  //Express will sever up the index.html file
  //if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));