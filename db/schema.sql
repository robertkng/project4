BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS savedSearch;

CREATE TABLE users (
  user_id SERIAL,
  username VARCHAR NOT NULL PRIMARY KEY UNIQUE,
  password VARCHAR NOT NULL,
  saved_itinerary INTEGER NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT current_timestamp
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
CREATE INDEX on itinerary (task_time_start) ;
CREATE INDEX on itinerary (date_created) ;

CREATE TABLE operators (
  operator_id SERIAL,
  username VARCHAR NOT NULL PRIMARY KEY UNIQUE,
  password VARCHAR NOT NULL,
  saved_itinerary INTEGER NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT current_timestamp
);

COMMIT;







