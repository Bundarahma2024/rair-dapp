const express = require('express');
const searchController = require('../api/search/search.Controller');
const contractsController = require('../api/contracts/contracts.Controller');
const filesController = require('../api/files/files.Controller');
const uploadController = require('../media/uploadController');
const productsController = require('../api/products/product.Controller');
const tokensController = require('../api/tokens/tokens.Controller');
const locksController = require('../locks/locks.Controller');
const resalesController = require('../resales/resales.Controller');
const offersController = require('../api/offers/offers.Controller');
const usersController = require('../api/users/users.Controller');
const verifyController = require('../verification/userVerification.controller');
const favoritesController = require('../api/favorites/favorites.Controller');
const authController = require('../auth/auth.controller');
const csv = require('./csv');

module.exports = () => {
  const router = express.Router();
  router.use('/search', searchController);
  router.use('/contracts', contractsController);
  router.use('/files', filesController);
  router.use('/products', productsController);
  router.use('/tokens', tokensController);
  router.use('/locks', locksController);
  router.use('/favorites', favoritesController);
  router.use('/verify', verifyController);
  router.use('/upload', uploadController);
  router.use('/users', usersController);
  router.use('/offers', offersController);
  router.use('/resales', resalesController);
  router.use('/auth', authController);
  router.use('/csv', csv);
  return router;
};
