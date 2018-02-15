const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const bodyParser = require('body-parser')
const fs = require('fs');

app.use(bodyParser.json());

app.post('/api/save-email', (req, res) => {
  //take in state json data
  //take in filepath of where it should be saved.
  const { path, state } = req.body;

  //convert to a file
  //save to the computer

  let data = JSON.stringify(state, null, 2);

  fs.writeFile('student-3.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });

  //send back success method.

  console.log(req.body);
});

app.get('/api/load-email', (req, res) => {
  const { path } = req.body;
  //recieve file path

  //read in json data from file
  var obj;
  fs.readFile(path, 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
  });

  //send back json data

  console.log(req.body);
});

app.listen(port, () => console.log(`Listening on port ${port}`));