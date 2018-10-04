const { Client } = require("pg");
const postgresConfig = require("./config");

const client = new Client(postgresConfig);

client.connect((err) => {
  if (err) {
    console.error(err);
  }
  console.log("postgres database connected");
});

const getListing = (homeId, callback) => {
  const query = "select * from descriptions.listings inner join descriptions.owners on descriptions.listings.owner_id = descriptions.owners.owner_id where descriptions.listings.listings_id = $1;";
  const value = [homeId];
  client.query(query, value, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

module.exports.getListing = getListing;
