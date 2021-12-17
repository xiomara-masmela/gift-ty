const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductsSchema = new mongoose.Schema({
  name: String,
  description: String,
  image_url: String,
  SKU: Number,
  category_id: Number,
  price: Number,
  keywords: Array,
  event: String,
  colour: String
});

// Create model for products
const Products = mongoose.model('products', ProductsSchema);

module.exports = Products;