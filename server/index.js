/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const compression = require('compression');
const client = require('../database/index.js');

const app = express();
const PUBLIC_PATH = path.resolve(__dirname, '..', 'public');

app.use(compression());
app.use('/rooms/:num', express.static(PUBLIC_PATH));

app.get('/api/reviews/:num', (req, res) => {
  client.execute(`SELECT * FROM listings.reviews where listingid=${req.params.num}`)
    .then((result) => {
      const row = result.rows;
      const data = { user_data: row };
      res.send(data);
    })
    .catch((err) => res.send(500, err));
});

module.exports = app;
