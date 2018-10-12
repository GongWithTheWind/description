const path = require("path");
const fs = require("fs");
const faker = require("faker");
const stringify = require("csv-stringify");

const chooseRandom = (array, max) => {
  const randomIndex = Math.floor(Math.random() * max);
  return array[randomIndex];
};

const generateAvatars = () => {
  const avatars = [];
  for (let i = 0; i < 1000; i += 1) {
    avatars.push(faker.image.avatar());
  }
  return avatars;
};

const avatars = generateAvatars();

const generateOwner = () => ([
  faker.name.findName(),
  faker.internet.email(),
  chooseRandom(avatars, 1000),
]);

const getRandomInt = (min, max) => {
  const low = Math.ceil(min);
  const high = Math.floor(max);
  return Math.floor(Math.random() * (high - low)) + low;
};

const makeOwnerIdData = () => {
  const id = [];
  id.push(getRandomInt(1, 1000001));
  return id;
};

const makeIds = () => {
  const ids = [];
  for (let i = 1; i < 1001; i += 1) {
    ids.push(makeOwnerIdData());
    console.log(i);
  }
  return ids;
};

const makeFile = () => {
  let ids = makeIds();
  stringify(ids, (err, output) => {
    if (err) {
      console.error(err);
    }
    fs.writeFile(path.join(__dirname, "/data.csv"), output, (error) => {
      if (error) {
        console.error(error);
      }
      console.log("all done");
    });
  });
};

makeFile();

module.exports.generateOwner = generateOwner;
