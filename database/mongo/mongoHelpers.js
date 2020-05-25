const db = require('./mongoDB.js')


const mongoHelpers = {

  getProduct: (id) => (db.findOne({ id: id })),
  postProduct: (obj) => (db.save(obj)),
  deleteProduct: (id) => ( db.deleteOne({ id: id }))

}


module.exports = mongoHelpers;
