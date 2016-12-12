const pgp = require('pg-promise')();
const db = require('../db/db');

// Function call that adds the input data into the itinerary database
function addItinerary(req, res, next) {
 db.none(`INSERT INTO itinerary (itinerary) VALUES ($1);`, [req.body.itinerary])
 .then(next())
 .catch(err => next(err));
}

module.exports = {
  addItinerary
};


