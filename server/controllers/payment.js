const axios = require('axios');
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
  .then((data) => {
    if (data.paymentMethod === 'vbank') {
      const smsBody = `주문이 접수되었습니다. 주문번호는 ${merchant_uid}입니다. -코르누보`;
      return axios({
        method: 'post',
        url: `https://api-sms.cloud.toast.com/sms/v2.0/appKeys/BcnfWoI1esEplKe6/sender/sms`,
        data: {
          body: smsBody,
          sendNo: '01062889557',
          recipientList: [{
            recipientNo: '01062889557',
          },
          {
            recipientNo: '01038881645',
          },
          {
            recipientNo: '01088511465',
          },
          {
            recipientNo: data.userPhone,
          },
        ],
        },
      })
      .then(() => {
        return res.json(data);
      })
      .catch(err => res.send(err));
    }

    const smsBody = `주문이 접수되었습니다. 주문번호는 ${merchant_uid}입니다. -코르누보`;
    return axios({
      method: 'post',
      url: `https://api-sms.cloud.toast.com/sms/v2.0/appKeys/TbO1RLyAq4WwOBhD/sender/sms`,
      data: {
        body: smsBody,
        sendNo: '01062889557',
        recipientList: [{
          recipientNo: '01062889557',
        },
        {
          recipientNo: '01038881645',
        },
        {
          recipientNo: '01088511465',
        },
        {
          recipientNo: data.userPhone,
        },
        ],
      },
    })
    .then(() => {
      return res.json(data);
    })
    .catch(err => res.send(err));
  })
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
  return Payment.find({})
    .sort({
      createdAt: -1,
    })
    .then((data) => {
      return res.json(data);
    })
    .catch(err => res.send({ err }));
};

