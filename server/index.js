/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const client = require('../database/index.js');

const app = express();
const PUBLIC_PATH = path.resolve(__dirname, '..', 'public');

app.use(compression());
app.use(bodyParser.json());
app.use(express.static(PUBLIC_PATH));

// need to rebuild for specific route
app.get('/api/reviews', (req, res) => {
  client.execute('SELECT * FROM listings.reviews where listingid=1')
    .then((result) => {
      const row = result.rows;
      const data = { user_data: row };
      res.send(data);
    })
    .catch((err) => res.send(500, err));
});

// app.get('/api/reviews/:listing_id', (req, res) => {
//   const id = req.params.listing_id;
//   res.send(200);
// });

module.exports = app;
