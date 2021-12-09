const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const InputsSchema = new Schema({
  age: Number,
  colour: String,
  event: String,
  likes: String
});

// Create model for inputs
const Inputs = mongoose.model('inputs', InputsSchema);

module.exports = Inputs;