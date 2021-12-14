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


//Get all the products
router.get('/products/:keyword/:event/:colour/', (req, res, next) => {
  
  // "car,bike,boat,ambulance"
  const keywords = (req.params.keywords ?? '').toLowerCase().split(',').filter(Boolean);
  const event = (req.params.event ?? '');
  const colour = (req.params.colour ?? '');
  console.log(keywords, event, colour)
  // todo: get top 10 results?
  if (keywords.length && event && colour) {
    // construct the query to get items with these keywords in db
    Products.find({
        "keywords": { $in: keywords},
        "event": event,
        "colour": colour
      })
      .then((data) => {
        // console.log(data)
        res.json(data)}
      )
      .catch(next);
  } else {
    Products.find()
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