const express = require('express');
const router = express.Router();
// const { addImages, deleteImages, getAllImages } = require('../models/images');
// const { getAllDestinations } = require('../models/destination');
const { searchImages } = require('../services/images');

// router.get('/destinations', getAllDestinations, (req, res) => {
//   res.json(res.destinations || []);
// })

// router.post('/images', addImages, (req, res) => {
//   res.json(res.images || []);
//   // res.json({mesage: 'Images was added'});
// })

// router.delete('/images/:id', deleteImages, (req, res) => {
//   res.json(res.images || []);
// })

router.get('/search', searchImages, (req, res) => {
  console.log(res.images);
  res.json(res.images || []);
})

module.exports = router;
