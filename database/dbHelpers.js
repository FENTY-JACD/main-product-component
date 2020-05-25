const pool = require('./postgresDB.js')


const dbHelpers = {
  // get product
  // get: (callback) => {
  //   db.query(`SELECT * FROM products;`, (err, results) => {
  //     if(err) {
  //       callback(err)
  //     } else {
  //       callback(null, results)
  //     }
  //   })
  // },
  // getPhotos: (id, callback) => {
  //   //
  //   let queryStr = `select products.id, products.name, photos.background, photos.img1, photos.img2, photos.img3 from photos left outer join products on products.id = photos.id;`
  //   db.query(queryStr, (err, results) => {
  //     if(err) {
  //       callback(err)
  //     } else {
  //       callback(null, results)
  //     }
  //   })
  // },
  // getColors: (callback) => {
  //   let queryStr = `select products.id, products.name, colors.name1, colors.name2, colors.name3, colors.color1, colors.color2, colors.color3  from colors inner join products on products.id = colors.id`
  //   db.query(queryStr, (err, results) => {
  //     if(err) {
  //       callback(err)
  //     } else {
  //       callback(null, results)
  //     }
  //   })
  // },

  ////////// Here starts the work of Chris, come to save the day ////////

  getProduct: (id, callback) => {
    let queryStr = `SELECT * FROM products WHERE id = ${id}`;

    pool.query(queryStr, (err, results) => {
      if(err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },

  postProduct: (params, callback) => {
    let product = params;
    let queryStr = `INSERT INTO products (name, price, category, description, rating, reviews, marketing) VALUES ('${product.name}', ${product.price}, '${product.category}', '${product.description}', ${product.rating}, ${product.reviews}, '${product.marketing}', '${product.background}', '${product.img1}', '${product.img2}', '${product.img3}', '${product.name1}', '${product.name2}', '${product.name2}', '${product.color1}', '${product.color2}', '${product.color3}');`

    db.query(queryStr, (err, results) => {
      if(err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },

  deleteProduct: (id, callback) => {
    let queryStr = `DELETE FROM products WHERE id = ${id};`;
    db.query(queryStr, (err, results) => {
      if(err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  }

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

}


module.exports = dbHelpers;

// select products.id, products.name, photos.background, photos.img1, photos.img2, photos.img3 from photos left outer join products on products.id = photos.id;

// select photos.background, photos.img1, photos.img2, photos.img3 from photos inner join products on photos.id = products.id;


// select products.id, products.name, colors.name1, colors.name2, colors.name3, colors.color1, colors.color2, colors.color3  from colors inner join products on products.id = colors.id