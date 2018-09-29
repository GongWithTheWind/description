DROP TABLE IF EXISTS houses;

CREATE TABLE houses (
  homeid int PRIMARY KEY,
  bathroomquantity text,
  contact text, 
  general text,
  guestaccess text, 
  guestquantity text,
  highlightdescriptions text,
  highlighttitles text,
  image text,
  interactionwithguests text,
  locations text,
  names text,
  otherthings text,
  ownername text,
  propertytypes text,
  thespace text
);

COPY listings.houses (
  homeid,
  bathroomquantity,
  contact, 
  general,
  guestaccess, 
  guestquantity,
  highlightdescriptions,
  highlighttitles,
  image,
  interactionwithguests,
  locations,
  names,
  otherthings,
  ownername,
  propertytypes,
  thespace
) from 'mockData/data.csv';


