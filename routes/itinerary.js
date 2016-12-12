const express = require('express');
const router = express.Router();
const db = require('../models/itinerary');

router.post('/itinerary', db.addItinerary, (req, res) => {
  res.json(res.itinerary || []);
})

// router.delete('/movies/:id', deleteMovie, (req, res) => {
//   res.json(res.movies || []);
// })

// router.get('/search', searchImages, (req, res) => {
//   res.json(res.images || []);
// })

module.exports = router;
