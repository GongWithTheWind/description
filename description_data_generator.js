// Betterbnb Description Module Data Generator

const loremIpsum = require('lorem-ipsum');
const fs = require('fs');

// Media url paths
const media = {
  owners: [
    'https://s3-us-west-1.amazonaws.com/betterbnb-description/person1.jpeg',
    'https://s3-us-west-1.amazonaws.com/betterbnb-description/person2.jpeg',
    'https://s3-us-west-1.amazonaws.com/betterbnb-description/person3.jpeg',
    'https://s3-us-west-1.amazonaws.com/betterbnb-description/person4.jpeg',
    'https://s3-us-west-1.amazonaws.com/betterbnb-description/person5.jpeg'
  ]
}

// Data Selection
const names = ['Quaint home by the Sea', 'Romantic Cabana', 'Designer Loft', 'Dream Getaway', 'Modern, chic home'];

const property_types = ['house', 'bungalow', 'cabin', 'casa particular', 
  'chalet', 'cottage', 'cycladic house', 'dammuso', 'dome house', 'earth house', 
  'farmstay', 'house boat', 'hut', 'lighthouse', 'pension', 'shepherd’s hut', 
  'tiny house', 'townhouse', 'trullo', 'villa'];

const locations = ['Kansas, USA', 'Cordoba, Argentina', 'Mandalay, Myanmar', 'Nagpur, India', 'Chungdu, China'];

const guest_quantity = [];
for (let i = 1; i <= 16; i++) {
  guest_quantity.push(i);
}

const beds = ['king', 'queen', 'double', 'twin', 'floor mattress', 'futon', 'couch'];

const bathroom_quantity = [];
for (let i = 1; i <= 16; i++) {
  bathroom_quantity.push(i);
}

const mini_ads = [
  {
    title: 'This home is on people’s minds.',
    description: 'It’s been viewed 500+ times in the past week.'
  }
];

const highlights = [
  { title: 'Great value', description: '94% of recent guests gave this home’s value a 5-star rating.', helpful: 0, notHelpful: 0 },
  { title: 'Self check-in', description: 'Easily check yourself in with the keypad.', helpful: 0, notHelpful: 0 },
  { title: 'Sparkling clean', description: '17 recent guests have said that this home was sparkling clean.', helpful: 0, notHelpful: 0 },
  { title: 'Quick responses', description: '9 recent guests said this host responded quickly.', helpful: 0, notHelpful: 0 },
  { title: 'Hot tub', description: 'This is one of few homes in this area that has this feature.', helpful: 0, notHelpful: 0 }
];

const amenity_selection = {
  basics: [
    'essentials (towels, bedsheets, soap, toilet paper, pillows)',
    'wifi',
    'shampoo',
    'closet/drawers',
    'TV',
    'heating',
    'air conditioning',
    'desk/workspace',
    'fireplace',
    'iron',
    'pets allowed',
    'smoking allowed',
    'parking'
  ],
  facilities: ['washer', 'dryer', 'pool', 'jacuzzi', 'gym'],
  dining: ['breakfast','coffee/tea','grill','pizza oven'],
  safety: ['smoke detector', 'carbon monoxide detector', 'first aid kit', 'safety card', 'fire extinguisher']
}

const owners = {
  name: ['Joe & Pete', 'Olivia', 'Michaelangelo', 'Jin-Sun Choi', 'Hillary'],
  image: media.owners,
  contact: ['jpjohnson@gmail.com', 'graham@yahoo.com', 'ktnolan@gmail.com', 'bethany2@gmail.com', 'tom@gmail.com'],
  badge: [true, false]
}

const randomize = (array, randomizeQuantity) => {
  let result = new Set;
  let quantity = 1;
  if (randomizeQuantity) {
    quantity = Math.ceil(Math.random() * array.length);
  }
  while (result.size < quantity) {
    let index = Math.floor(Math.random() * array.length);
    result.add(array[index]);
  }
  if (result.size === 1) { return [...result][0]; }
  return [...result];
}

const generateRandomTextBlocks = () => {
  var numberOfParagraphs = Math.floor(1 + Math.random() * 3);
  return loremIpsum({
    count: numberOfParagraphs,
    units: 'paragraphs',
    sentenceLowerBound: 3,
    sentenceUpperBound: 15,
    format: 'plain',
    random: Math.random
  });
}

const generateHouse = (home_id) => {
  return {
    home_id: home_id,
    name: randomize(names),
    property_type: randomize(property_types),
    location: randomize(locations),
    guests: randomize(guest_quantity),
    beds: {
      'bedrooms': [randomize(beds, true), randomize(beds, true)],
      'common space': randomize(beds, true)
    },
    bathrooms: randomize(bathroom_quantity),
    mini_ad: randomize(mini_ads),
    highlights: randomize(highlights, true),
    description: {
      'general': generateRandomTextBlocks(),
      'the space': generateRandomTextBlocks(),
      'guest access': generateRandomTextBlocks(),
      'interaction with guests': generateRandomTextBlocks(),
      'other things': generateRandomTextBlocks()
    },
    amenities: {
      basics: randomize(amenity_selection.basics, true),
      facilities: randomize(amenity_selection.facilities, true),
      dining: randomize(amenity_selection.dining, true),
      safety: randomize(amenity_selection.safety)
    },
    owner: {
      name: randomize(owners.name),
      image: randomize(owners.image),
      contact: randomize(owners.contact),
      badge: randomize(owners.badge)
    }
  }
}

const generateHouses = (quantity, start_index) => {
  let houses = [];
  for (let i = start_index; i < start_index + quantity; i++) {
    houses.push(generateHouse(i));
  }
  return houses;
}

// Generate data and data file
const data = generateHouses(100, 100);

const generateDataFile = () => {
  fs.writeFile(__dirname + '/seeds/description_data.json', JSON.stringify(data), 'utf8', (err) => {
    if (err) { console.log(err); }
    else {
      console.log('Data file created.');
    }
  });
}

generateDataFile();