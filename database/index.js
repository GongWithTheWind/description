const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/description');

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
    'bedrooms': Array,
    'common space': Array
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
    'general': String,
    'the space': String,
    'guest access': String,
    'interaction with guests': String,
    'other things': String
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

module.exports = db;