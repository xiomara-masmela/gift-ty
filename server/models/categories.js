const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategoriesSchema = new Schema({
  name: String,
  description: String,
 
});

// Create model for categories
const Categories = mongoose.model('categories', CategoriesSchema );

module.exports = Categories;