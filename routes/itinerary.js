const express = require('express');
const router = express.Router();
const db = require('../models/itinerary');

router.get('/itinerary', db.getAllItineraries, (req, res) => {
  res.json(res.itinerary || []);
})

// call addItinerary function within the ../models/itinerary file
router.post('/itinerary', db.addItinerary, (req, res) => {
  res.json(res.itinerary || []);
})

router.put('/itinerary', db.updateItinerary, (req, res) => {
  res.json(res.itinerary || []);
})

router.delete('/itinerary', db.deleteItinerary, (req, res) => {
  res.json(res.itinerary || []);
})

module.exports = router;
