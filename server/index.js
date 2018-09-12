const express = require('express');
const db = require('../database/index.js');
let app = express();

app.use(express.static(__dirname + './../client/dist/'));

app.get('/descriptions/:homeId', function (req, res) {
  db.retrieve(req.params.homeId, function (err, data) {
    if (err) { console.log(err); }
    else {
      res.send(data);
    }
  });
});

app.listen(3002, () => console.log('Listening on port 3002...'));