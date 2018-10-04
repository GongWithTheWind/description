const { Client } = require("pg");
const postgresConfig = require("./config");

const client = new Client(postgresConfig);

client.connect((err) => {
  if (err) {
    console.error(err);
  }
  console.log("postgres database connected");
});

module.exports = client;
