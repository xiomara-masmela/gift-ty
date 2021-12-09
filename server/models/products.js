const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const ProductsSchema = new Schema({
  name: String,
  description: String,
  image_url: String,
  SKU: Number,
  category_id: Number,
  price: Number
});

// Create model for products
const Products = mongoose.model('products', ProductsSchema);

module.exports = Products;