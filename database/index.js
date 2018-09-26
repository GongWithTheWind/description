const mongoose = require("mongoose");
const data = require("../description_data_generator.js");

mongoose.connect("mongodb://localhost/description", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to DB!");
});

const descriptionSchema = new mongoose.Schema({
  homeId: Number,
  name: String,
  propertyType: String,
  location: String,
  guests: Number,
  beds: {
    bedrooms: Array,
    commonSpace: Array,
  },
  bathrooms: Number,
  miniAd: {
    title: String,
    description: String,
  },
  highlights: {
    title: String,
    description: String,
    helpful: Number,
    notHelpful: Number,
  },
  description: {
    general: String,
    theSpace: String,
    guestAccess: String,
    interactionWithGuests: String,
    otherThings: String,
  },
  amenities: {
    basics: Array,
    facilities: Array,
    dining: Array,
    safety: Array,
  },
  owner: {
    name: String,
    image: String,
    contact: String,
    badge: Boolean,
  },
});

const Description = mongoose.model("Description", descriptionSchema);

const retrieve = (homeId, callback) => {
  const query = { homeId };
  Description.find(query)
    .exec((err, home) => {
      if (err) { callback(err); } else {
        callback(null, home);
      }
    });
};

const saveHouse = (homeId, callback) => {
  const house = data.generateHouse(homeId);
  const newHouse = new Description(house);
  newHouse.save((err, result) => {
    if (err) {
      callback(err);
    }
    callback(null, result);
  });
};

const getLatestHomeId = callback => (
  Description.find({}).sort({ homeId: "descending" }).limit(1).exec((err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  })
);

const removeHouse = (homeId, callback) => {
  Description.deleteOne({ homeId }).exec((err, result) => {
    if (err) {
      callback(err);
    }
    callback(null, result);
  });
};

module.exports.retrieve = retrieve;
module.exports.getLatestHomeId = getLatestHomeId;
module.exports.saveHouse = saveHouse;
module.exports.removeHouse = removeHouse;
