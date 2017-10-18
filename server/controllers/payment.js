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
    merchant_uid,
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
  });

  return payment.save()
  .then(data => res.json(data))
  .catch(err => res.send({ err }));
};

exports.oneButerPaymentGet = (req, res) => {
  const PaymentId = req.params.Paymentname;

  Payment.find({ _id: PaymentId }, (err, data) => {
    if (err) res.send({ err });
    return res.json(data);
  });
};


exports.allPaymentsGet = (req, res) => {  
  Payment.find({}, (err, data) => {
    if (err) console.log(req.err);
    return res.json(data);
  });
};

