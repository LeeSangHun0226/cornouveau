const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const Product = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number },
  titlePhoto: { type: String, required: true },
  description: [{
    photo: { type: String },
    text: { type: String },
  }],
});

module.exports = mongoose.model('Product', Product);
