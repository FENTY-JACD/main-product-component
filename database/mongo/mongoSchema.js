const mongoose = require('mongoose');


var ProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  category: String,
  description: String,
  rating: Number,
  reviews: Number,
  marketing: String,
  background: String,
  img1: String,
  img2: String,
  img3: String,
  name1: String,
  name2: String,
  name3: String,
  color1: String,
  color2: String,
  color3: String

});

module.exports = ProductSchema;