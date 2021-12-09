const express = require('express');
const router = express.Router();
const Products = require('../models/products')

router.get('/products', (req, res, next) => {
  
  Products.find()
    .then((data) => res.json(data))
    .catch(next);
});
//Post products 
//Use for role shopOwner only
router.post('/products', (req, res, next) => {
    console.log(req.body)
    if (req.body) {
      Products.create(req.body)
        .then((data) => res.json(data))
        .catch(next);
    } else {
      res.json({
        error: 'error',
      });
    }
  });
module.exports = router;