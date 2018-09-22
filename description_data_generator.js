// Betterbnb Description Module Data Generator
// I was here
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

const propertyTypes = ['house', 'bungalow', 'cabin', 'casa particular', 
  'chalet', 'cottage', 'cycladic house', 'dammuso', 'dome house', 'earth house', 
  'farmstay', 'house boat', 'hut', 'lighthouse', 'pension', 'shepherd’s hut', 
  'tiny house', 'townhouse', 'trullo', 'villa'];

const locations = ['Kansas, USA', 'Cordoba, Argentina', 'Mandalay, Myanmar', 'Nagpur, India', 'Chungdu, China'];

const guestQuantity = [];
for (let i = 1; i <= 16; i++) {
  guestQuantity.push(i);
}

const beds = ['king', 'queen', 'double', 'twin', 'floor mattress', 'futon', 'couch'];

const bathroomQuantity = [];
for (let i = 1; i <= 16; i++) {
  bathroomQuantity.push(i);
}

const miniAds = [
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

const amenitySelection = {
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

const makeArray = (value) => {
  if (!Array.isArray(value)) {
    return [value];
  } else {
    return value;
  }
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

const generateHouse = (homeId) => {
  return {
    homeId: homeId,
    name: randomize(names),
    propertyType: randomize(propertyTypes),
    location: randomize(locations),
    guests: randomize(guestQuantity),
    beds: {
      bedrooms: randomize([makeArray(randomize(beds, true)), makeArray(randomize(beds, true)), 
        makeArray(randomize(beds, true)), makeArray(randomize(beds, true)), 
        makeArray(randomize(beds, true)), makeArray(randomize(beds, true))], true),
      commonSpace: makeArray(randomize(beds, true))
    },
    bathrooms: randomize(bathroomQuantity),
    miniAd: randomize(miniAds),
    highlights: makeArray(randomize(highlights, true)),
    description: {
      general: generateRandomTextBlocks(),
      theSpace: generateRandomTextBlocks(),
      guestAccess: generateRandomTextBlocks(),
      interactionWithGuests: generateRandomTextBlocks(),
      otherThings: generateRandomTextBlocks()
    },
    amenities: {
      basics: makeArray(randomize(amenitySelection.basics, true)),
      facilities: makeArray(randomize(amenitySelection.facilities, true)),
      dining: makeArray(randomize(amenitySelection.dining, true)),
      safety: makeArray(randomize(amenitySelection.safety))
    },
    owner: {
      name: randomize(owners.name),
      image: randomize(owners.image),
      contact: randomize(owners.contact),
      badge: randomize(owners.badge)
    }
  }
}

const generateHouses = (quantity, startIndex) => {
  let houses = [];
  for (let i = startIndex; i < startIndex + quantity; i++) {
    houses.push(generateHouse(i));
  }
  return houses;
}

// Generate data and data file
const data = generateHouses(100, 100);

const generateDataFile = () => {
  fs.writeFile(__dirname + '/seeds/descriptions.json', JSON.stringify(data), 'utf8', (err) => {
    if (err) { console.log(err); }
    else {
      console.log('Data file created.');
    }
  });
}

generateDataFile();