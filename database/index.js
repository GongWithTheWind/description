const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/description", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to DB!");
});

const descriptionSchema = new mongoose.Schema({
  home_id: Number,
  name: String,
  property_type: String,
  location: String,
  guests: Number,
  beds: {
    bedrooms: Array,
    commonSpace: Array,
  },
  bathrooms: Number,
  mini_ad: {
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
  const query = { homeId: Number(homeId) };
  Description.find(query)
    .exec((err, data) => {
      if (err) { callback(err); } else {
        callback(null, data);
      }
    });
};

module.exports.retrieve = retrieve;
