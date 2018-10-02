const loremIpsum = require("lorem-ipsum");
const fs = require("fs");
const path = require("path");
const async = require("async");
const stringify = require("csv-stringify");

// Media url paths
const media = {
  owners: [
    "https://s3-us-west-1.amazonaws.com/betterbnb-description/person1.jpeg",
    "https://s3-us-west-1.amazonaws.com/betterbnb-description/person2.jpeg",
    "https://s3-us-west-1.amazonaws.com/betterbnb-description/person3.jpeg",
    "https://s3-us-west-1.amazonaws.com/betterbnb-description/person4.jpeg",
    "https://s3-us-west-1.amazonaws.com/betterbnb-description/person5.jpeg"
  ],
};

// Data Selection
const names = ["Quaint home by the Sea", "Romantic Cabana", "Designer Loft", "Dream Getaway", "Modern home"];

const propertyTypes = ["house", "bungalow", "cabin", "casa particular", 
  "chalet", "cottage", "cycladic house", "dammuso", "dome house", "earth house", 
  "farmstay", "house boat", "hut", "lighthouse", "pension", "shepherd hut", 
  "tiny house", "townhouse", "trullo", "villa"];

const locations = ["Kansas-USA", "Cordoba-Argentina", "Mandalay-Myanmar", "Nagpur-India", "Chungdu-China"];

const guestQuantity = [];
for (let i = 1; i <= 16; i += 1) {
  guestQuantity.push(i);
}

const beds = ["king", "queen", "double", "twin", "floor mattress", "futon", "couch"];

const bathroomQuantity = [];
for (let i = 1; i <= 16; i += 1) {
  bathroomQuantity.push(i);
}

const miniAds = [
  {
    title: "This home is on people’s minds.",
    description: "It’s been viewed 500+ times in the past week.",
  },
];

const highlights = [
  { title: "Great value", description: "94% of recent guests gave this home’s value a 5-star rating.", helpful: 0, notHelpful: 0 },
  { title: "Self check-in", description: "Easily check yourself in with the keypad.", helpful: 0, notHelpful: 0 },
  { title: "Sparkling clean", description: "17 recent guests have said that this home was sparkling clean.", helpful: 0, notHelpful: 0 },
  { title: "Quick responses", description: "9 recent guests said this host responded quickly.", helpful: 0, notHelpful: 0 },
  { title: "Hot tub", description: "This is one of few homes in this area that has this feature.", helpful: 0, notHelpful: 0 }
];

const highlightTitles = ["Great value", "Self check-in", "Sparkling clean", "Quick responses", "Hot tub"];
const highlightDescriptions = ["94% of recent guests gave this home’s value a 5-star rating.", 
"Easily check yourself in with the keypad.",
"17 recent guests have said that this home was sparkling clean."
];

const amenitySelection = {
  basics: [
    "wifi",
    "shampoo",
    "closet/drawers",
    "TV",
    "heating",
    "air conditioning",
    "desk/workspace",
    "fireplace",
    "iron",
    "pets allowed",
    "smoking allowed",
    "parking"
  ],
  facilities: ["washer", "dryer", "pool", "jacuzzi", "gym"],
  dining: ["breakfast","coffee/tea","grill","pizza oven"],
  safety: ["smoke detector", "carbon monoxide detector", "first aid kit", "safety card", "fire extinguisher"]
}

const owners = {
  name: ["Joe & Pete", "Olivia", "Michaelangelo", "Jin-Sun Choi", "Hillary"],
  image: media.owners,
  contact: ["jpjohnson@gmail.com", "graham@yahoo.com", "ktnolan@gmail.com", "bethany2@gmail.com", "tom@gmail.com"],
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
  var numberOfParagraphs = Math.floor(1 + Math.random() * 1);
  return loremIpsum({
    count: numberOfParagraphs,
    units: "paragraphs",
    sentenceLowerBound: 1,
    sentenceUpperBound: 1,
    format: "plain",
    random: Math.random,
  });
};

const getRandomInt = (min, max) => {
  const low = Math.ceil(min);
  const high = Math.floor(max);
  return Math.floor(Math.random() * (high - low)) + low;
};

const generateHouse = (homeId) => {
  const house = [];
  house.push(randomize(bathroomQuantity));
  house.push(generateRandomTextBlocks());
  house.push(generateRandomTextBlocks());
  house.push(randomize(guestQuantity));
  house.push(randomize(highlightDescriptions));
  house.push(randomize(highlightTitles));
  house.push(generateRandomTextBlocks());
  house.push(randomize(locations));
  house.push(randomize(names));
  house.push(generateRandomTextBlocks());
  house.push(randomize(propertyTypes));
  house.push(generateRandomTextBlocks());
  house.push(getRandomInt(1, 1000001));
  return house;
};

const generateHouses = (quantity) => {
  const houses = [];
  for (let i = 0; i < quantity; i += 1) {
    houses.push(generateHouse(i));
    console.log(i);
  }
  return houses;
};

const generateCSVFiles = (quantity, count = 0) => {
  if (count === 10) {
    return;
  }
  let houses = generateHouses(quantity);
  const options = { quote: "'", quotedString: true };
  stringify(houses, options, (err, output) => {
    fs.appendFile(path.join(__dirname, "/seeds/postgres/data2.csv"), output, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`${quantity} files written`);
      houses = null;
      output = null;
      generateCSVFiles(quantity, count + 1);
    });
  });
};

generateCSVFiles(500000);
// generateCSVFiles(1000000, 1000001);
// generateCSVFiles(1000000, 2000001);
// generateCSVFiles(1000000, 3000001);
// generateCSVFiles(1000000, 4000001);
// generateCSVFiles(1000000, 5000001);
// generateCSVFiles(1000000, 6000001);
// generateCSVFiles(1000000, 7000001);
// generateCSVFiles(1000000, 8000001);
// generateCSVFiles(1000000, 9000001);

module.exports.generateHouse = generateHouse;
