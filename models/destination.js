// const pgp = require('pg-promise')();
// const db = require('../lib/dbconnect');

// // function getAllDestinations(req, res, next) {
// //   db.any(`SELECT * FROM destinations;`)
// //   .then((results) => {
// //     res.destinations = results
// //     next();
// //   })
// //   .catch(err => next(err));
// // }

// function getAllDestinations(req, res, next) {
//   db.any(`SELECT * FROM destinations;`)
//   .then((results) => {
//     res.status(200)
//         .json({
//           status: 'success',
//           data: results,
//           message: 'Retrieved ALL destinations'
//         });
//   })
//   .catch(err => next(err));
// }



// module.exports = {
//   getAllDestinations: getAllDestinations,
//   // addMovie,
//   // deleteMovie
// }


const pgp = require('pg-promise')();
const db = require('../lib/dbconnect');

function getAllDestinations(req, res, next) {
  db.any(`SELECT * FROM destinations;`)
  .then((results) => {
    res.status(200)
        .json({
          status: 'success',
          data: results,
          message: 'Retrieved ALL destinations'
        });
  })
  .catch(err => next(err));
}

module.exports = {
  getAllDestinations: getAllDestinations,
};


