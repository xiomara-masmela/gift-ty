const express = require('express');
const router = express.Router();
const Products = require('../models/products')

router.get('/products', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Products.find()
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;