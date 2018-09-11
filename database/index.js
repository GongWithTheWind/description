const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/description', { useMongoClient: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to DB!');
});

const descriptionSchema = new mongoose.Schema({
  home_id: Number,
  name: String,
  property_type: String,
  location: String,
  guests: Number,
  beds: {
    bedrooms: Array,
    commonSpace: Array
  },
  bathrooms: Number,
  mini_ad: {
    title: String,
    description: String
  },
  highlights: {
    title: String,
    description: String,
    helpful: Number,
    notHelpful: Number
  },
  description: {
    general: String,
    theSpace: String,
    guestAccess: String,
    interactionWithGuests: String,
    otherThings: String
  },
  amenities: {
    basics: Array,
    facilities: Array,
    dining: Array,
    safety: Array
  },
  owner: {
    name: String,
    image: String,
    contact: String,
    badge: Boolean
  }
});

const Description = mongoose.model('Description', descriptionSchema);

let retrieve = (homeId, callback) => {
  Description.find({ 'homeId': homeId })
    .exec((err, data) => {
      if (err) { console.log('Error retrieving data'); }
      else {
        callback(null, data);
      }
    });
};

module.exports.retrieve = retrieve;