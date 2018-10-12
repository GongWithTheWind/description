DROP SCHEMA IF EXISTS descriptions;

CREATE SCHEMA descriptions;

DROP TABLE IF EXISTS descriptions.owners;

CREATE TABLE descriptions.owners (
  owner_id serial PRIMARY KEY,
  name varchar,
  contact varchar,
  image varchar
);

DROP TABLE IF EXISTS descriptions.listings;

CREATE TABLE descriptions.listings (
  listings_id serial PRIMARY KEY,
  bathroom_quantity integer,
  general varchar(150),
  guest_access varchar(150),
  guest_quantity integer,
  highlight_description varchar(150),
  highlight_title varchar(150),
  guest_interactions varchar(150),
  location varchar(150),
  name varchar(150),
  space_information varchar(150),
  property_type varchar(150),
  owner_id integer REFERENCES descriptions.owners (owner_id)
);
