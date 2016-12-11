const db = require('../db/db');

// Function call that adds the entries of the three APIs and the username to the
// savedSearch table of the database
function saveItinerary(req, res, next) {
 db.none(`INSERT INTO itinerary (itinerary) VALUES ($1);`, [req.body.itinerary])
 .then(next())
 .catch(err => next(err));
}

module.exports = {
  saveItinerary
};


