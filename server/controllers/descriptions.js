const data = require("../../seeds/dataGenerator");
const postgres = require("../../database/postgres");

exports.getListing = (homeId, callback) => {
  const query = "select * from descriptions.listings inner join descriptions.owners on descriptions.listings.owner_id = descriptions.owners.owner_id where descriptions.listings.listings_id = $1;";
  const value = [homeId];
  postgres.query(query, value, (error, result) => {
    if (error) {
      callback(error);
    }
    callback(null, result);
  });
};

exports.postListing = (callback) => {
  const query = "insert into descriptions.listings (bathroom_quantity, general, guest_access, guest_quantity, highlight_description, highlight_title, guest_interactions, location, name, space_information, property_type, owner_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)";
  const newListing = data.generateHouse();
  postgres.query(query, newListing, (error, result) => {
    if (error) {
      callback(error);
    }
    callback(null, result);
  });
};

exports.removeListing = (listingId, callback) => {
  const query = "delete from descriptions.listings where listings_id = $1";
  postgres.query(query, [listingId], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null, result);
  });
};
