const Payment = require('../models/payment');

exports.savePayment = (req, res) => {

  const {
    userName,
    userPhone,
    userEmail,
    shippingName,
    shippingPhone,
    paymentMethod,
    customerMessage,
    postcode,
    baseAddress,
    extraAddress,
  } = req.body.paymentData;

  const {
    productName,
    price,
    qty,
    size,
    paymentSituation,
    merchant_uid,
    photo,
  } = req.body.product;

  const address = extraAddress ? `(${postcode}) ${baseAddress} ${extraAddress}` : `(${postcode} ${baseAddress}`;
  const totalPrice = price * qty;
  const orderMessage = customerMessage ? customerMessage : '.';

  const payment = new Payment({
    userName,
    userPhone,
    userEmail,
    shippingName,
    shippingPhone,
    paymentMethod,
    customerMessage: orderMessage,
    merchant_uid,
    address,
    productName,
    price,
    qty,
    size,
    totalPrice,
    paymentSituation,
    photo,
  });

  return payment.save()
  .then(data => res.json(data))
  .catch(err => res.send({ err }));
};

exports.onePaymentGet = (req, res) => {
  const merchant_uid = req.params.uid;

  Payment.find({ merchant_uid }, (err, data) => {
    if (err) res.send({ err });
    return res.json(data);
  });
};

exports.changePayment = (req, res) => {
  console.log(req.params, req.body)
  const merchant_uid = req.params.uid;
  const paymentSituation = req.body.paymentSituation;

  Payment.update({ merchant_uid }, { $set: { paymentSituation } })
  .then(() => {
    Payment.find({}, (err, data) => {
      if (err) res.send({ err });
      return res.json(data);
    });
  });
};

exports.allPaymentsGet = (req, res) => {  
  Payment.find({}, (err, data) => {
    if (err) res.send({ err });
    return res.json(data);
  });
};

