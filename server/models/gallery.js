const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const Gallery = new Schema({
  name: { type: String, required: true },
  titleImage: { type: String, required: true },
  subImage: { type: String, required: true },
});

module.exports = mongoose.model('Gallery', Gallery);
