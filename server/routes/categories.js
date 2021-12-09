const express = require('express');
const router = express.Router();
const Categories = require('../models/categories')

router.get('/categories', (req, res, next) => {
  
  Categories.find()
    .then((data) => res.json(data))
    .catch(next);
});
//Post categories
//Use for role shopOwner only
router.post('/categories', (req, res, next) => {
    console.log(req.body)
    if (req.body) {
      Categories.create(req.body)
        .then((data) => res.json(data))
        .catch(next);
    } else {
      res.json({
        error: 'error',
      });
    }
  });
module.exports = router;