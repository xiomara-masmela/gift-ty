const express = require('express');
const router = express.Router();
const Inputs = require('../models/inputs')

router.get('/inputs', (req, res, next) => {
  Inputs.find()
    .then((data) => res.json(data))
    .catch(next);
});
//Post products 
//Use for role shopOwner only
router.post('/inputs', (req, res, next) => {
    console.log(req.body)
    if (req.body) {
      Inputs.create(req.body)
        .then((data) => res.json(data))
        .catch(next);
    } else {
      res.json({
        error: 'error',
      });
    }
  });
module.exports = router;