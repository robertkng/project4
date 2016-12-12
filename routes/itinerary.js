const express = require('express');
const router = express.Router();
const db = require('../models/itinerary');

// call addItinerary function within the ../models/itinerary file
router.post('/itinerary', db.addItinerary, (req, res) => {
  res.json(res.itinerary || []);
})



// router.delete('/movies/:id', deleteMovie, (req, res) => {
//   res.json(res.movies || []);
// })


module.exports = router;
