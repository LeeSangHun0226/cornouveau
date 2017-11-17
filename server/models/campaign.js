const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const Campaign = new Schema({
  name: { type: String, required: true },
  titleImage: { type: String, required: true },
  subImage: [{ type: String, required: true }],
});

module.exports = mongoose.model('Campaign', Campaign);
