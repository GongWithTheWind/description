const express = require("express");
const path = require("path");
const db = require("../database/index.js");

const app = express();

app.use("/:homeId", express.static(path.join(__dirname, "./../public/")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/descriptions", (req, res) => {
  db.getLatestHomeId((err, results) => {
    const { homeId } = results[0];
    db.saveHouse(homeId + 1, (error) => {
      if (err) {
        console.error(error);
      }
      res.sendStatus(200);
    });
  });
});

app.get("/descriptions/:homeId", (req, res) => {
  const homeId = Number(req.params.homeId);
  db.retrieve(homeId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(3002, () => console.log("Listening on port 3002..."));
