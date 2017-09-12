const express = require('express');

const ProductController = require('./controllers/product');
const SireController = require('./controllers/sire');

module.exports = function (app) {
  const apiRoutes = express.Router();
  const productRoutes = express.Router();
  const sireRoutes = express.Router();
  /*------------------------------------------------------------------------------
    PRODUCT ROUTE
  ------------------------------------------------------------------------------*/
  apiRoutes.use('/product', productRoutes);

  productRoutes.get('/', ProductController.allProductsGet);
  productRoutes.get('/:productname', ProductController.oneProductGet);
  productRoutes.post('/', ProductController.saveProduct);

  apiRoutes.use('/sire', sireRoutes);

  sireRoutes.get('/', SireController.allSireGet);
  sireRoutes.get('/:productname', SireController.oneSireGet);
  sireRoutes.post('/', SireController.saveSire);

  app.use('/api', apiRoutes);
};
