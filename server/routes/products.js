const express = require('express');
const router = express.Router();
const Products = require('../models/products');



//Get products
router.get('/products', (req, res, next) => {
  const reqKeywords = (req.query.keywords ?? '').toLowerCase().split(',').filter(Boolean);
  const reqEvent = (req.query.event ?? '');
  const reqColour = (req.query.colour ?? '');
  // todo: get top 10 results?
  console.log(reqColour , reqEvent , reqKeywords)
  
  if(reqColour && reqEvent && reqKeywords.length) {
    console.log("my search")
    // construct the query to get items with these keywords in db
    Products.find({ 
      colour: reqColour,
      event: reqEvent,
      keywords:  {$in:reqKeywords}
      }).limit(10)
      .then((data) => {
        res.json(data)}
      )
      .catch(next);
  } else {
      console.log("display all")
      Products.find().limit(10)
      .then((data) => res.json(data))
      .catch(next);
  }

});






module.exports = router;


//Upload 
//https://stackoverflow.com/questions/61154675/how-can-i-upload-file-from-react-to-express-server