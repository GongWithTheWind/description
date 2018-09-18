const express = require("express");
const path = require("path");
const db = require("../database/index.js");

const app = express();

console.log(__dirname);
app.use("/:homeId", express.static(path.join(__dirname, "./../public/")));

app.get("/descriptions/:homeId", (req, res) => {
  db.retrieve(req.params.homeId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(3002, () => console.log("Listening on port 3002..."));
