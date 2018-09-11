const express = require('express');
const app = express();
const db = require('../database/index.js');

app.use(express.static(__dirname + './../client/dist/'));

app.get('/descriptions/:homeId', (req, res) => {
  db.retrieve(req.params.homeId, (err, data) => {
    if (err) { console.log(err); }
    else {
      console.log(data);
      res.send(data);
    }
  });
});

app.listen(3002, () => console.log('Listening on port 3002...'));