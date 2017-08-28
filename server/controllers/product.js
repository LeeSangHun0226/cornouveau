const Product = require('../models/product');

exports.saveProduct = (req, res) => {
  const { name, price, amount, titlePhoto, description } = req.body;

  const product = new Product({
    name,
    price,
    amount,
    titlePhoto,
    description,
  });

  return product.save()
  .then(data => res.json(data))
  .catch(err => res.send({ err }));
};

exports.oneProductGet = (req, res) => {
  const productId = req.params.productname;

  Product.find({ _id: productId }, (err, data) => {
    if (err) res.send({ err });
    return res.json(data);
  });
};


exports.allProductsGet = (req, res) => {  
  Product.find({}, (err, data) => {
    if (err) console.log(req.err);
    return res.json(data);
  });
};

