//https://www.digitalocean.com/community/tutorials/getting-started-with-the-mern-stack

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const products = require('./server/routes/products');
const categories = require('./server/routes/categories');
const inputs = require('./server/routes/inputs')
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3001;
app.use(express.json());
app.use(express.static("./client/build"));




// Connect to the database
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));


mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use('/api', products);
app.use('/api', categories);
app.use('/api', inputs);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});