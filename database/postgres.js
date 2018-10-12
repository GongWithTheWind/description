const { Pool } = require("pg");
const postgresConfig = require("./config");

const pool = new Pool(postgresConfig);

pool.connect((err) => {
  if (err) {
    return console.error(err);
  }
  console.log("pool connected");
});

module.exports = pool;
