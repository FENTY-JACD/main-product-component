// const dbHelpers = require('../database/dbHelpers.js');
const mongoHelpers = require('../database//mongo/mongoHelpers.js');

const controller = {
  // get: (req, res) => {
  //   dbHelpers.get((err, results) => {
  //     if(err) {
  //       res.status(400).send(err)
  //     } else {
  //       res.status(200).send(results)
  //     }
  //   })
  // },

  // getPhotos: (req, res) => {
  //   const {id} = req.params

  //   dbHelpers.getPhotos(id, (err, results) => {
  //     if(err) {
  //       res.status(400).send(err)
  //     } else {
  //       res.status(200).send(results)
  //     }
  //   })
  // },

  // getColors: (req, res) => {
  //   dbHelpers.getColors((err, results) => {
  //     if(err) {
  //       res.status(400).send(err)
  //     } else {
  //       res.status(200).send(results)
  //     }
  //   })
  // },

///// Here starts the work of Chris ///////

  getProduct: (req, res) => {
    mongoHelpers.getProduct(req.params.id)
      .then(data => res.status(200).send(data))
      .catch(error => res.status(400).send(error))
  },

  // postProduct: (req, res) => {
  //   dbHelpers.postProduct(req.params, (err, results) => {
  //     if(err) {
  //       res.status(400).send(err)
  //     } else {
  //       res.status(200).send(results)
  //     }
  //   })
  // },

  // updateProduct: (req, res) => {
  //   dbHelpers.updateProduct(req.params, (err, results) => {
  //     if(err) {
  //       res.status(400).send(err)
  //     } else {
  //       res.status(200).send(results)
  //     }
  //   })
  // },

  // deleteProduct: (req, res) => {
  //   dbHelpers.deleteProduct(req.params, (err, results) => {
  //     if(err) {
  //       res.status(400).send(err)
  //     } else {
  //       res.status(200).send(results)
  //     }
  //   })
  // }


}

module.exports = controller;