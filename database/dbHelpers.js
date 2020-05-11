const db = require('./db.js')


const dbHelpers = {
  get: (callback) => {
    db.query(`SELECT * FROM products;`, (err, results) => {
      if(err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },
  getPhotos: (id, callback) => {
    // console.log(id)
    let queryStr = `select products.id, products.name, photos.background, photos.img1, photos.img2, photos.img3 from photos left outer join products on products.id = photos.id;`
    db.query(queryStr, (err, results) => {
      callback(null, results)
    })
  },
  getColors: (callback) => {
    let queryStr = `select products.id, products.name, colors.name1, colors.name2, colors.name3, colors.color1, colors.color2, colors.color3  from colors inner join products on products.id = colors.id`
    db.query(queryStr, (err, results) => {
      callback(null, results)
    })
  }
}


module.exports = dbHelpers;

// select products.id, products.name, photos.background, photos.img1, photos.img2, photos.img3 from photos left outer join products on products.id = photos.id;

// select photos.background, photos.img1, photos.img2, photos.img3 from photos inner join products on photos.id = products.id;


// select products.id, products.name, colors.name1, colors.name2, colors.name3, colors.color1, colors.color2, colors.color3  from colors inner join products on products.id = colors.id