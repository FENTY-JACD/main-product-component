const pool = require('./postgresDB.js')


const dbHelpers = {
  get: (callback) => {
    // let id = (Math.floor(Math.random() * 100) + 9999800);
    pool.query(`SELECT id, name, price, category, description, rating, reviews, marketing FROM products WHERE id = 1;`, (err, results) => {
      if(err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },
  getPhotos: (callback) => {
    // let id = (Math.floor(Math.random() * 100) + 9999800);
    pool.query(`SELECT id, name, background, img1, img2, img3 FROM products WHERE id = 1;`, (err, results) => {
      if(err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },
  getColors: (callback) => {

    pool.query(`SELECT id, name, name1, name2, name3, color1, color2, color3 FROM products WHERE id < 5;`, (err, results) => {
      if(err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },

  ////////// Here starts the work of Chris ////////

  getProduct: (id, callback) => {
    pool.query(`SELECT * FROM products WHERE id = ${id};`, (err, results) => {
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

    pool.query(queryStr, (err, results) => {
      if(err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },

  deleteProduct: (id, callback) => {
    let queryStr = `DELETE FROM products WHERE id = ${id};`;
    pool.query(queryStr, (err, results) => {
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