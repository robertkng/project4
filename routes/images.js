const express = require('express');
const router = express.Router();
// const { addImages, deleteImages, getAllImages } = require('../models/images');
const { getAllImages } = require('../models/images');
const { searchImages } = require('../services/images');

router.get('/images', getAllImages, (req, res) => {
  res.json(res.images || []);
})

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
