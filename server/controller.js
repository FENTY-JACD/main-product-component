const dbHelpers = require('../database/dbHelpers.js')

const controller = {
  get: (req, res) => {
    dbHelpers.get((err, results) => {
      if(err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(results)
      }
    })
  },

  getPhotos: (req, res) => {
    dbHelpers.getPhotos((err, results) => {
      if(err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(results)
      }
    })
  },

  getColors: (req, res) => {
    dbHelpers.getColors((err, results) => {
      if(err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(results)
      }
    })
  },

///// Here starts the work of Chris ///////

  getProduct: (req, res) => {
    let id = req.params.id;
    dbHelpers.getProduct(id, (err, results) => {
      if(err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(results)
      }
    })
  },

  postProduct: (req, res) => {
    dbHelpers.postProduct(req.params, (err, results) => {
      if(err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(results)
      }
    })
  },

  deleteProduct: (req, res) => {
    dbHelpers.deleteProduct(req.params, (err, results) => {
      if(err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(results)
      }
    })
  },

  // updateProduct: (req, res) => {
  //   dbHelpers.updateProduct(req.params, (err, results) => {
  //     if(err) {
  //       res.status(400).send(err)
  //     } else {
  //       res.status(200).send(results)
  //     }
  //   })
  // },

};

module.exports = controller;