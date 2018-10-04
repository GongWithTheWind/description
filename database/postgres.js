const pg = require("pg");

const connectionString = "postgres://localhost:5432/postgres";

const client = new pg.Client(connectionString);
client.connect((err) => {
  if (err) {
    console.log(err);
    return;
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
