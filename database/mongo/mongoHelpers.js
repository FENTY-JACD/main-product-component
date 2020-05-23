const db = require('./mongoDB.js')
// const mongoose = require('mongoose');


const mongoHelpers = {

  getProduct: (id) => ( db.findOne({id: id}) ),

  // postProduct: (params, callback) => {
  //   let queryStr = ``;

  //   db.query(queryStr, (err, results) => {
  //     if(err) {
  //       callback(err)
  //     } else {
  //       callback(null, results)
  //     }
  //   })
  // },

  // updateProduct: (params, callback) => {
  //   let queryStr = ``;

  //   db.query(queryStr, (err, results) => {
  //     if(err) {
  //       callback(err)
  //     } else {
  //       callback(null, results)
  //     }
  //   })
  // },

  // deleteProduct: (id, callback) => {
  //   let queryStr = `DELETE products, colors, photos FROM products INNER JOIN colors INNER JOIN photos ON t2.ref = t1.id WHERE t1.id = 1;`;

  //   db.query(queryStr, (err, results) => {
  //     if(err) {
  //       callback(err)
  //     } else {
  //       callback(null, results)
  //     }
  //   })
  // },


}


module.exports = mongoHelpers;

// select products.id, products.name, photos.background, photos.img1, photos.img2, photos.img3 from photos left outer join products on products.id = photos.id;

// select photos.background, photos.img1, photos.img2, photos.img3 from photos inner join products on photos.id = products.id;


// select products.id, products.name, colors.name1, colors.name2, colors.name3, colors.color1, colors.color2, colors.color3  from colors inner join products on products.id = colors.id