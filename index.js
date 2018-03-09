const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const { getDate } = require('./utils/helper.js')
app.use(bodyParser.json());

mongoose = require('mongoose');
require('./models/Email');
mongoose.connect(keys.mongoURI);

const Email = require('./models/Email');


app.post('/api/save-new-email', async (req, res) => {
  console.log(req.body.state);

  //take in state json data
  const { fileName } = req.body.state;
  const { state } = req.body;

  //get current date
  const { getDate } = require('./utils/helper.js')
  const today = getDate();
  //save to the mongo
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
});

app.put('/api/update-email', async (req, res) => {
  const { fileName } = req.body.state;
  console.log(req.body);
  // Email.findOneAndUpdate({ fileName }, this.req.body)

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