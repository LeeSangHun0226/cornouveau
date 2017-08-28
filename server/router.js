const express = require('express');

const ProductController = require('./controllers/product');

module.exports = function (app) {
  const apiRoutes = express.Router();
  const productRoutes = express.Router();
  /*------------------------------------------------------------------------------
    PRODUCT ROUTE
  ------------------------------------------------------------------------------*/
  apiRoutes.use('/product', productRoutes);

  productRoutes.get('/', ProductController.allProductsGet);
  productRoutes.get('/:productname', ProductController.oneProductGet);
  productRoutes.post('/', ProductController.saveProduct);


  app.use('/api', apiRoutes);
};
