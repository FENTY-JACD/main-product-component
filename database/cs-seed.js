
const pool = require('../database/postgresDB.js');
const fs = require('fs');


let names = ["INVISIMATTE", "BLUSH", "HYDRATING", "FULL", "COMPLEXION", "GLOW", "ESSENTIALS", "PRO FILTR", "POWDER", "LUMINIZER", "MATTIFYING", "SOFT MATTE", "LIPSTICK"];

let prices = [20, 28, 32, 36, 40, 48, 50, 52, 60, 70, 80, 90, 120];

let categories = ["FOUNDATION", "CONCEALER", "POWDER", "CONTOUR", "BLOTTING", "BRONZER", "LIPSTICK", "BROWS", "BODY"]

let descriptions = ["FOR FAIR TO LIGHT SKIN TONES - GREAT FOR BRIGHTENING", "FOR TAN TO DEEP SKIN TONES", "FOR DEEP TO VERY DEEP SKIN TONES - GREAT FOR BRIGHTENING", "MEDIUM TO FULL COVERAGE FOR ALL SKIN TONES.", "INSTANT REFRESH", "ON-THE-GO FILTER EFFECT"];

let ratings = [ 3.0, 3.5, 3.9, 4.0, 4.2, 4.3, 4.5, 4.7,5.0];

let review = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

let marketingArray = ["BEST SELLER", "NEW + LIMITED EDITION", "RIHANNAS FAVE", "NEW", "LIMITED EDITION", "EXCLUSIVE"];

let backgrounds = ["https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background1.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background2.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background4.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background5.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background6.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background7.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background8.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background9.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background10.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background11.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background12.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background13.jpg"];

//product
let img1Array = ["https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product1.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product2.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product3.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product4.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product5.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product6.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product7.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product8.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product9.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product10.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product11.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product12.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product13.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product14.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product15.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product16.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product17.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product18.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product19.jpg"];

//colors
let img2Array = ["https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color1.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color2.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color3.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color4.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color5.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color6.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color7.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color8.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color9.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color10.png"];

//model
let img3Array = ["https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model1.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model2.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model3.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model4.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model5.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model6.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model7.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model8.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model9.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model10.jpg"];

let name1Array = ["PUMPKIN ROSE","CLAPBACK", "SAW-C", "FRECKLE FIESTA", "CANDY VENOM", "TURKS AND CAICOS", "DRAGON MAMI", "SHAWTY", "PMS", "THICC", "TIGER TINI", "MIDNIGHT WASABI", "GLASS SLIPPER", "FU$$Y", "FENTY GLOW", "HOT CHOCOLIT", "DIAMOND MILK", "$WEET MOUTH", "BUTTA BISCUIT", "AMBER", "MACCHIATO", "TOFFEE TEASE", "TEDDY", "TROPHY WIFE", "WATTABRAT", "CHILLZ", "METAL MOON", "LIGHTNING DUST", "FIRE CRYSTAL", "MEAN MONEY", "HU$TLA BABY", "GIRL NEXT DOOR", "CHIC PHREAK", "GINGER BINGE", "MOSCOW MULE", "AFTERNOON SNACK", "MO HUNNY", "CHAMPAGNE HEIST", "BEACH BUM", "BORDEAUX BRAT", "PINK LEMONADE", "RIDIIC", "BLONDE", "COGNAC", "STARSTRUCK", "TRIPPIN", "YACHT LYFE", "CONFETTI", "UNICORN"]


let name2Array = ["PUMPKIN ROSE","CLAPBACK", "SAW-C", "FRECKLE FIESTA", "CANDY VENOM", "TURKS AND CAICOS", "DRAGON MAMI", "SHAWTY", "PMS", "THICC", "TIGER TINI", "MIDNIGHT WASABI", "GLASS SLIPPER", "FU$$Y", "FENTY GLOW", "HOT CHOCOLIT", "DIAMOND MILK", "$WEET MOUTH", "BUTTA BISCUIT", "AMBER", "MACCHIATO", "TOFFEE TEASE", "TEDDY", "TROPHY WIFE", "WATTABRAT", "CHILLZ", "METAL MOON", "LIGHTNING DUST", "FIRE CRYSTAL", "MEAN MONEY", "HU$TLA BABY", "GIRL NEXT DOOR", "CHIC PHREAK", "GINGER BINGE", "MOSCOW MULE", "AFTERNOON SNACK", "MO HUNNY", "CHAMPAGNE HEIST", "BEACH BUM", "BORDEAUX BRAT", "PINK LEMONADE", "RIDIIC", "BLONDE", "COGNAC", "STARSTRUCK", "TRIPPIN", "YACHT LYFE", "CONFETTI", "UNICORN"]


let name3Array = ["PUMPKIN ROSE","CLAPBACK", "SAW-C", "FRECKLE FIESTA", "CANDY VENOM", "TURKS AND CAICOS", "DRAGON MAMI", "SHAWTY", "PMS", "THICC", "TIGER TINI", "MIDNIGHT WASABI", "GLASS SLIPPER", "FU$$Y", "FENTY GLOW", "HOT CHOCOLIT", "DIAMOND MILK", "$WEET MOUTH", "BUTTA BISCUIT", "AMBER", "MACCHIATO", "TOFFEE TEASE", "TEDDY", "TROPHY WIFE", "WATTABRAT", "CHILLZ", "METAL MOON", "LIGHTNING DUST", "FIRE CRYSTAL", "MEAN MONEY", "HU$TLA BABY", "GIRL NEXT DOOR", "CHIC PHREAK", "GINGER BINGE", "MOSCOW MULE", "AFTERNOON SNACK", "MO HUNNY", "CHAMPAGNE HEIST", "BEACH BUM", "BORDEAUX BRAT", "PINK LEMONADE", "RIDIIC", "BLONDE", "COGNAC", "STARSTRUCK", "TRIPPIN", "YACHT LYFE", "CONFETTI", "UNICORN"]


//colors
let color1Array = ["https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color1.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color2.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color3.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color4.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color5.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color6.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color7.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color8.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color9.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color10.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color11.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color12.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color13.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color14.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color15.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color16.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color17.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color18.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color19.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color20.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color21.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color22.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color23.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color24.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color25.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color26.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color27.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color28.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color29.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color30.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color31.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color32.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color33.png"];

let color2Array = ["https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color1.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color2.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color3.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color4.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color5.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color6.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color7.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color8.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color9.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color10.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color11.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color12.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color13.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color14.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color15.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color16.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color17.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color18.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color19.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color20.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color21.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color22.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color23.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color24.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color25.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color26.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color27.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color28.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color29.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color30.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color31.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color32.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color33.png"];

let color3Array = ["https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color1.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color2.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color3.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color4.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color5.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color6.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color7.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color8.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color9.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color10.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color11.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color12.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color13.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color14.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color15.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color16.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color17.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color18.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color19.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color20.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color21.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color22.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color23.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color24.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color25.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color26.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color27.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color28.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color29.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color30.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color31.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color32.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color33.png"];

var createProduct = () =>{
  let product = {};
  product["name"] = names[Math.floor(Math.random() * names.length)] + ' ' + names[Math.floor(Math.random() * names.length)] + ' ' + names[Math.floor(Math.random() * names.length)];
  product["price"] = prices[Math.floor(Math.random() * prices.length)];
  product["category"] = categories[Math.floor(Math.random() * categories.length)];
  product["description"] = descriptions[Math.floor(Math.random() * descriptions.length)];
  product["rating"] = ratings[Math.floor(Math.random() * ratings.length)];
  product["reviews"] = review[[Math.floor(Math.random() * review.length)]]
  product["marketing"] = marketingArray[Math.floor(Math.random() * marketingArray.length)];


  product["background"] = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  product["img1"] = img1Array[Math.floor(Math.random() * img1Array.length)];
  product["img2"] = img2Array[Math.floor(Math.random() * img2Array.length)];
  product["img3"] = img3Array[Math.floor(Math.random() * img3Array.length)];


  product["name1"] = name1Array[Math.floor(Math.random() * name1Array.length)];
  product["name2"] = name2Array[Math.floor(Math.random() * name2Array.length)];
  product["name3"] = name3Array[Math.floor(Math.random() * name3Array.length)];
  product["color1"] = color1Array[Math.floor(Math.random() * color1Array.length)];
  product["color2"] = color2Array[Math.floor(Math.random() * color2Array.length)];
  product["color3"] = color3Array[Math.floor(Math.random() * color3Array.length)];

  return product;
};


//This will create 100 products
const createProductList = (n) => {
  let productsArr = [];
  for (let i = 0; i < n; i++) {
    productsArr.push(createProduct());
  }
  return productsArr;
};




var seedDb = (n) => {
  let products = createProductList(n);
  console.log(products.length);
  let queries = [];
  for (let i = 0; i < products.length; i++) {
    let queryStr = `INSERT INTO products (name, price, category, description, rating, reviews, marketing, background, img1, img2, img3, name1, name2, name3, color1, color2, color3) VALUES ('${products[i]["name"]}', ${products[i]["price"]}, '${products[i]["category"]}', '${products[i]["description"]}', ${products[i]["rating"]}, ${products[i]["reviews"]}, '${products[i]["marketing"]}', '${products[i]["background"]}', '${products[i]["img1"]}', '${products[i]["img2"]}', '${products[i]["img3"]}', '${products[i]["name1"]}', '${products[i]["name2"]}', '${products[i]["name3"]}', '${products[i]["color1"]}', '${products[i]["color2"]}', '${products[i]["color3"]}');`;

    pool.query(queryStr)
      .catch(e => console.error(e.stack))
  }
};

// seeds the product table
// seedDb(10000000);

/////// CREATE CSV WITH 10M data points //////////////

const writeUsers = fs.createWriteStream('products.csv');
writeUsers.write('id, name, price, category, description, rating, reviews, marketing, background, img1, img2, img3, name1, name2, name3, color1, color2, color3\n', 'utf8');



function writeTenMillionUsers(writer, encoding, callback) {
  let i = 1000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;

      const name = names[Math.floor(Math.random() * names.length)] + ' ' + names[Math.floor(Math.random() * names.length)] + ' ' + names[Math.floor(Math.random() * names.length)];
      const price = prices[Math.floor(Math.random() * prices.length)];
      const category = categories[Math.floor(Math.random() * categories.length)];
      const description = descriptions[Math.floor(Math.random() * descriptions.length)];
      const rating = ratings[Math.floor(Math.random() * ratings.length)];
      const reviews = review[[Math.floor(Math.random() * review.length)]]
      const marketing = marketingArray[Math.floor(Math.random() * marketingArray.length)];
      const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      const img1 = img1Array[Math.floor(Math.random() * img1Array.length)];
      const img2 = img2Array[Math.floor(Math.random() * img2Array.length)];
      const img3 = img3Array[Math.floor(Math.random() * img3Array.length)];
      const name1 = name1Array[Math.floor(Math.random() * name1Array.length)];
      const name2 = name2Array[Math.floor(Math.random() * name2Array.length)];
      const name3 = name3Array[Math.floor(Math.random() * name3Array.length)];
      const color1 = color1Array[Math.floor(Math.random() * color1Array.length)];
      const color2 = color2Array[Math.floor(Math.random() * color2Array.length)];
      const color3 = color3Array[Math.floor(Math.random() * color3Array.length)];

      const data = `${id}, ${name}, ${price}, ${category}, ${description}, ${rating}, ${reviews}, ${marketing}, ${background}, ${img1}, ${img2}, ${img3}, ${name1}, ${name2}, ${name3}, ${color1}, ${color2}, ${color3}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write()
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});


