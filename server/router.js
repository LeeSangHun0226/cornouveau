const express = require('express');

const ProductController = require('./controllers/product');
const SireController = require('./controllers/sire');
const DamController = require('./controllers/dam');
const GalleryController = require('./controllers/gallery');

module.exports = function (app) {
  const apiRoutes = express.Router();
  const productRoutes = express.Router();
  const sireRoutes = express.Router();
  const damRoutes = express.Router();
  const galleryRoutes = express.Router();
  /*------------------------------------------------------------------------------
    PRODUCT ROUTE
  ------------------------------------------------------------------------------*/
  apiRoutes.use('/product', productRoutes);

  productRoutes.get('/', ProductController.allProductsGet);
  productRoutes.get('/:productname', ProductController.oneProductGet);
  productRoutes.post('/', ProductController.saveProduct);

  apiRoutes.use('/sire', sireRoutes);

  sireRoutes.get('/', SireController.allSireGet);
  sireRoutes.get('/:sirename', SireController.oneSireGet);
  sireRoutes.post('/', SireController.saveSire);

  apiRoutes.use('/dam', damRoutes);

  damRoutes.get('/', DamController.allDamGet);
  damRoutes.get('/:damname', DamController.oneDamGet);
  damRoutes.post('/', DamController.saveDam);

  apiRoutes.use('/gallery', galleryRoutes);
  galleryRoutes.get('/', GalleryController.allGalleryGet);
  galleryRoutes.get('/:galleryname', GalleryController.oneGalleryGet);
  galleryRoutes.post('/', GalleryController.saveGallery);

  app.use('/api', apiRoutes);
};
