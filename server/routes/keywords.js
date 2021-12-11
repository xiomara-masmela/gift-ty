const express = require('express');
const router = express.Router();
const Keywords = require('../models/keywords')

router.get('/keywords', (req, res, next) => {
  
  Keywords.find()
    .then((data) => res.json(data))
    .catch(next);
});
//Post keywords
//Use for role shopOwner only
router.post('/keywords', (req, res, next) => {
    console.log(req.body)
    if (req.body) {
      Keywords.create(req.body)
        .then((data) => res.json(data))
        .catch(next);
    } else {
      res.json({
        error: 'error',
      });
    }
  });
module.exports = router;