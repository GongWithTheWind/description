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

const query = "select * from houses where homeid = ?";
const value = [10000000];

client.execute(query, value, { prepare: true })
  .then(result => {
  	console.log(`House with homeid ${value[0]}`, result.rows[0]);
  });

app.listen(3000, () => {
  console.log("listening at 3000");
});