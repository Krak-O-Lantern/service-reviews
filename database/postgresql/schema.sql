DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

CREATE TABLE IF NOT EXISTS listing (
  listingId INTEGER PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS reviewlist (
  id INTEGER PRIMARY KEY,
  listingId INTEGER,
  username VARCHAR,
  image VARCHAR,
  review TEXT,
  cleanliness INTEGER,
  communication INTEGER,
  checkin INTEGER,
  accuracy INTEGER,
  location INTEGER,
  value INTEGER,
  createdAt VARCHAR
);