const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const Dam = new Schema({
  name: { type: String, required: true },
  titleImage: { type: String, required: true },
  subImage: [{ type: String, required: true }],
});

module.exports = mongoose.model('Dam', Dam);
