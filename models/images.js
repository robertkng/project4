const pgp = require('pg-promise')();
const db = require('../lib/dbconnect');

function getAllImages(req, res, next) {
  db.any(`SELECT * FROM destinations;`)
  .then((results) => {
    res.images = results
    next();
  })
  .catch(err => next(err));
}

// function addMovie(req, res, next) {
//   console.log(req.body);
//   // db.none placing data in but not pulling anything
//   db.none(`INSERT INTO movies (title, poster) VALUES ($1, $2);`, [req.body.Title, req.body.Poster, req.body.Rated, req.body.Runtime])
//   .then(next())
//   .catch(err => next(err));
// }

// function deleteMovie(req, res, next) {
//   db.result(`DELETE FROM movies
//     WHERE id = $1;`, [req.params.id])
//   .then(next())
//   .catch(err => next(err));
// }


module.exports = {
  getAllImages,
  // addMovie,
  // deleteMovie
}
