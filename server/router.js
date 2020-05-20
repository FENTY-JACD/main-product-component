const router = require('express').Router();
const controller = require('./controller.js');


  router
    .route('/')
    .get(controller.get)

  router
    .route('/photos')
    .get(controller.getPhotos)


  router
    .route('/colors')
    .get(controller.getColors)

/// Here starts the Work of Chris, the savior of this code /////

  router
    .route('/product/id')
    .get(controller.getProduct)

  router
    .route('/product/:id')
    .post(controller.postProduct)

  router
    .route('/product/:id')
    .put(controller.updateProduct)

  router
    .route('/product/:id')
    .delete(controller.deleteProduct)



module.exports = router




