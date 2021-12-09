const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const CategoriesSchema = new Schema({
  name: String,
  description: String,
 
});

// Create model for categories
const Categories = mongoose.model('categories', CategoriesSchema );

module.exports = Categories;