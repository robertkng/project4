BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS destinations;
DROP TABLE IF EXISTS itinerary;
DROP TABLE IF EXISTS operators;

CREATE TABLE users (
  user_id SERIAL,
  username VARCHAR NOT NULL PRIMARY KEY UNIQUE,
  password VARCHAR NOT NULL,
  saved_itinerary INTEGER NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE destinations (
  city VARCHAR NOT NULL,
  country VARCHAR NOT NULL,
  activity VARCHAR NOT NULL,
  operator VARCHAR NOT NULL,
  email VARCHAR NOT NULL
);

CREATE TABLE itinerary (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  itinerary VARCHAR(1000) NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  deleted BOOLEAN NOT NULL DEFAULT FALSE,
  date_created TIMESTAMP NOT NULL DEFAULT NOW(),
  date_completed TIMESTAMP,
  date_deleted TIMESTAMP
);

CREATE INDEX on itinerary (completed) ;
CREATE INDEX on itinerary (date_created) ;
CREATE INDEX on itinerary (date_deleted) ;

CREATE TABLE operators (
  operator_id SERIAL,
  username VARCHAR NOT NULL PRIMARY KEY UNIQUE,
  password VARCHAR NOT NULL,
  saved_itinerary INTEGER NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT current_timestamp
);

COMMIT;







