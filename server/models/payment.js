const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const Payment = new Schema({
  userName: { type: String, required: true },
  userPhone: { type: String, required: true },
  userEmail: { type: String, required: true },
  shippingName: { type: String },
  shippingPhone: { type: String },
  address: { type: String, required: true },
  paymentMethod: { type: String },
  customerMessage: { type: String },
  merchant_uid: { type: String },
  productName: { type: String },
  price: { type: Number },
  qty: { type: Number },
  size: { type: String },
  totalPrice: { type: Number },
  paymentSituation: { type: String },
});

module.exports = mongoose.model('Payment', Payment);
