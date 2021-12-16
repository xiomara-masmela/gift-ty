const express = require('express');
const router = express.Router();
const Products = require('../models/products');
const multer = require('multer');
const path = require('path');
const csv = require('csvtojson');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage
});


//Get products
router.get('/products', (req, res, next) => {
  const reqKeywords = (req.query.keywords ?? '').toLowerCase().split(',').filter(Boolean);
  const reqEvent = (req.query.event ?? '');
  const reqColour = (req.query.colour ?? '');
  // todo: get top 10 results?
  console.log(reqColour && reqEvent && reqKeywords.length)
  
  if(reqColour && reqEvent && reqKeywords.length) {
    console.log("my search")
    // construct the query to get items with these keywords in db
    Products.find({ $and: [
      {colour: reqColour},
      {event: reqEvent},
      {keywords: { $in: reqKeywords}}
    ]
        
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


//Post products 
//Use for role shopOwner only
// router.post('/products', (req, res, next) => {
//     console.log(req.body)
//     if (req.body) {
//       Products.create(req.body)
//         .then((data) => res.json(data))
//         .catch(next);
//     } else {
//       res.json({
//         error: 'error',
//       });
//     }
//   });


//Upload file

// const server = express();
// router.post('/products', upload.single('csv'), (req, res, next) => {
//   //convert csv to json
//   console.log(file.path)
//   csv()
//     .fromFile(req.file.path)
//     .then((jsonObj) => {
//       console.log(jsonObj);
//       //the jsonObj will contain all the data in JSONFormat.
//       //but we want columns Test1,Test2,Test3,Test4,Final data as number .
//       //becuase we set the dataType of these fields as Number in our mongoose.Schema(). 
//       //here we put a for loop and change these column value in number from string using parseFloat(). 
//       //here we use parseFloat() beause because these fields contain the float values.
//       for (var x = 0; x < jsonObj; x++) {
//         temp = parseFloat(jsonObj[x].Test1)
//         jsonObj[x].Test1 = temp;
//         temp = parseFloat(jsonObj[x].Test2)
//         jsonObj[x].Test2 = temp;
//         temp = parseFloat(jsonObj[x].Test3)
//         jsonObj[x].Test3 = temp;
//         temp = parseFloat(jsonObj[x].Test4)
//         jsonObj[x].Test4 = temp;
//         temp = parseFloat(jsonObj[x].Final)
//         jsonObj[x].Final = temp;
//       }
//       //insertmany is used to save bulk data in database.
//       //saving the data in collection(table)
//       Products.insertMany(jsonObj, (err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.redirect('/');
//         }
//       });
//     });
// });



module.exports = router;


//Upload 
//https://stackoverflow.com/questions/61154675/how-can-i-upload-file-from-react-to-express-server