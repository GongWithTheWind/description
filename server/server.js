const express = require("express");
const cassandra = require("cassandra-driver");

const app = express();
const client = new cassandra.Client({ contactPoints: ["127.0.0.1"], keyspace: 'listings' });
client.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("cassandra connected");
});

app.listen(3000, () => {
  console.log("listening at 3000");
});