const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const KeywordsSchema = new Schema({
  keyword: String,
  ocurrence: Number
});


const Keywords = mongoose.model('keywords', KeywordsSchema);

module.exports = Keywords;