const fetch = require('node-fetch');
// const API_URL = "https://api.shutterstock.com/v2";
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

function searchImages(req, res, next) {
  console.log(req.query);
  fetch(`https://${client_id}:${client_secret}@api.shutterstock.com/v2/images/search?query=${req.query.images}`)
  .then(results => results.json())
  .then((data) => {
    res.images = data;
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

module.exports = { searchImages };

