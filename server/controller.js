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

  postProduct: (req, res) => {
    mongoHelpers.postProduct(req.params)
      .then(() => res.status(200).send('Item Posted'))
      .catch(error => res.status(400).send(error))
  },

  deleteProduct: (req, res) => {
    mongoHelpers.deleteProduct(req.params.id)
      .then(() => res.status(200).send('Item Deleted'))
      .catch(error => res.status(400).send(error))
  }

  // updateProduct: (req, res) => {
  //   dbHelpers.updateProduct(req.params, (err, results) => {
  //     if(err) {
  //       res.status(400).send(err)
  //     } else {
  //       res.status(200).send(results)
  //     }
  //   })
  // },

}

module.exports = controller;