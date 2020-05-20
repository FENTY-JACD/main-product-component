
const db = require('../database/db.js');


let names = ["INVISIMATTE", "BLUSH", "HYDRATING", "FULL", "COMPLEXION", "GLOW", "ESSENTIALS", "PRO FILTR", "POWDER", "LUMINIZER", "MATTIFYING", "SOFT MATTE", "LIPSTICK"];

let prices = [20, 28, 32, 36, 40, 48, 50, 52, 60, 70, 80, 90, 120];

let category = ["FOUNDATION", "CONCEALER", "POWDER", "CONTOUR", "BLOTTING", "BRONZER", "LIPSTICK", "BROWS", "BODY"]

let descirptions = ["FOR FAIR TO LIGHT SKIN TONES - GREAT FOR BRIGHTENING", "FOR TAN TO DEEP SKIN TONES", "FOR DEEP TO VERY DEEP SKIN TONES - GREAT FOR BRIGHTENING", "MEDIUM TO FULL COVERAGE FOR ALL SKIN TONES.", "INSTANT REFRESH", "ON-THE-GO FILTER EFFECT"];

let ratings = [ 3.0, 3.5, 3.9, 4.0, 4.2, 4.3, 4.5, 4.7,5.0];

let reviews = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]


let marketing = ["BEST SELLER", "NEW + LIMITED EDITION", "RIHANNAS FAVE", "NEW", "LIMITED EDITION", "EXCLUSIVE"];

var create = () =>{
  let product = {};
  product["name"] = names[Math.floor(Math.random() * Math.floor(names.length))] + ' ' + names[Math.floor(Math.random() * Math.floor(names.length))] + ' ' + names[Math.floor(Math.random() * Math.floor(names.length))];
  product["price"] = prices[Math.floor(Math.random() * Math.floor(prices.length))];
  product["category"] = category[Math.floor(Math.random() * Math.floor(ratings.length))];
  product["description"] = descirptions[Math.floor(Math.random() * Math.floor(descirptions.length))];
  product["rating"] = ratings[Math.floor(Math.random() * Math.floor(ratings.length))];
  product["reviews"] = reviews[[Math.floor(Math.random() * Math.floor(reviews.length))]]
  product["marketing"] = marketing[Math.floor(Math.random() * Math.floor(marketing.length))];

  return product;
};

// commented this out because i have no clue why its here
// create()


//This will create 100 products
const createProducts = () => {
  let productsArr = [];
  for (let i = 0; i < 10000000; i++) {
    productsArr.push(create());
  }
  return productsArr;
};

let products = createProducts();

// Seeding the product table
var seedDb = () =>{
  let queries = [];
  for (let i = 0; i < products.length; i++) {
    let queryStr = `INSERT INTO products (name, price, category, description, rating, reviews, marketing) VALUES ('${products[i]["name"]}', ${products[i]["price"]}, '${products[i]["category"]}', '${products[i]["description"]}', ${products[i]["rating"]}, ${products[i]["reviews"]}, '${products[i]["marketing"]}');`;

    db.query(queryStr)
  }
};







let background = ["https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background1.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background2.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background4.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background5.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background6.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background7.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background8.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background9.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background10.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background11.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background12.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Background/background13.jpg"]

//product
let img1 = ["https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product1.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product2.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product3.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product4.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product5.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product6.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product7.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product8.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product9.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product10.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product11.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product12.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product13.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product14.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product15.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product16.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product17.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product18.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/products/product19.jpg"]

//colors
let img2 = ["https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color1.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color2.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color3.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color4.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color5.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color6.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color7.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color8.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color9.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color10.png"]

//model
let img3 = ["https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model1.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model2.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model3.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model4.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model5.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model6.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model7.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model8.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model9.jpg", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/model/model10.jpg"]


// creating images for a product
var createProduct = () =>{
  let product = {};

  product["background"] = background[Math.floor(Math.random() * Math.floor(background.length))];
  product["img1"] = img1[Math.floor(Math.random() * Math.floor(img1.length))];
  product["img2"] = img2[Math.floor(Math.random() * Math.floor(img2.length))];
  product["img3"] = img3[Math.floor(Math.random() * Math.floor(img3.length))];


  return product;
};

//creates 1 photo-set

// creates a photos array table
const createProd = () => {
  let productsArr = [];
  for (let i = 0; i < 10000000; i++) {
    productsArr.push(createProduct());
  }
  return productsArr;
};

let product = createProd();


// Seedinging the photos Table
var seedsDb = () =>{
  let queries = [];
  for (let i = 0; i < product.length; i++) {
    // let queryStr = `INSERT INTO product (name, price, color, category, description, rating, img_id, bkcolor) VALUES ('${product[i]["name"]}', ${product[i]["price"]}, '${product[i]["color"]}', '${product[i]["category"]}', '${product[i]["description"]}', ${product[i]["rating"]}, '${product[i]["img_id"]}', '${product[i]["bkcolor"]}');`;

    let queryStr = `INSERT INTO photos (background, img1, img2, img3) VALUES ('${product[i]["background"]}', '${product[i]["img1"]}', '${product[i]["img2"]}', '${product[i]["img3"]}')`

    db.query(queryStr)
  }
};






let name1 = ["PUMPKIN ROSE","CLAPBACK", "SAW-C", "FRECKLE FIESTA", "CANDY VENOM", "TURKS AND CAICOS", "DRAGON MAMI", "SHAWTY", "PMS", "THICC", "TIGER TINI", "MIDNIGHT WASABI", "GLASS SLIPPER", "FU$$Y", "FENTY GLOW", "HOT CHOCOLIT", "DIAMOND MILK", "$WEET MOUTH", "BUTTA BISCUIT", "AMBER", "MACCHIATO", "TOFFEE TEASE", "TEDDY", "TROPHY WIFE", "WATTABRAT", "CHILLZ", "METAL MOON", "LIGHTNING DUST", "FIRE CRYSTAL", "MEAN MONEY", "HU$TLA BABY", "GIRL NEXT DOOR", "CHIC PHREAK", "GINGER BINGE", "MOSCOW MULE", "AFTERNOON SNACK", "MO HUNNY", "CHAMPAGNE HEIST", "BEACH BUM", "BORDEAUX BRAT", "PINK LEMONADE", "RIDIIC", "BLONDE", "COGNAC", "STARSTRUCK", "TRIPPIN", "YACHT LYFE", "CONFETTI", "UNICORN"]


let name2 = ["PUMPKIN ROSE","CLAPBACK", "SAW-C", "FRECKLE FIESTA", "CANDY VENOM", "TURKS AND CAICOS", "DRAGON MAMI", "SHAWTY", "PMS", "THICC", "TIGER TINI", "MIDNIGHT WASABI", "GLASS SLIPPER", "FU$$Y", "FENTY GLOW", "HOT CHOCOLIT", "DIAMOND MILK", "$WEET MOUTH", "BUTTA BISCUIT", "AMBER", "MACCHIATO", "TOFFEE TEASE", "TEDDY", "TROPHY WIFE", "WATTABRAT", "CHILLZ", "METAL MOON", "LIGHTNING DUST", "FIRE CRYSTAL", "MEAN MONEY", "HU$TLA BABY", "GIRL NEXT DOOR", "CHIC PHREAK", "GINGER BINGE", "MOSCOW MULE", "AFTERNOON SNACK", "MO HUNNY", "CHAMPAGNE HEIST", "BEACH BUM", "BORDEAUX BRAT", "PINK LEMONADE", "RIDIIC", "BLONDE", "COGNAC", "STARSTRUCK", "TRIPPIN", "YACHT LYFE", "CONFETTI", "UNICORN"]


let name3 = ["PUMPKIN ROSE","CLAPBACK", "SAW-C", "FRECKLE FIESTA", "CANDY VENOM", "TURKS AND CAICOS", "DRAGON MAMI", "SHAWTY", "PMS", "THICC", "TIGER TINI", "MIDNIGHT WASABI", "GLASS SLIPPER", "FU$$Y", "FENTY GLOW", "HOT CHOCOLIT", "DIAMOND MILK", "$WEET MOUTH", "BUTTA BISCUIT", "AMBER", "MACCHIATO", "TOFFEE TEASE", "TEDDY", "TROPHY WIFE", "WATTABRAT", "CHILLZ", "METAL MOON", "LIGHTNING DUST", "FIRE CRYSTAL", "MEAN MONEY", "HU$TLA BABY", "GIRL NEXT DOOR", "CHIC PHREAK", "GINGER BINGE", "MOSCOW MULE", "AFTERNOON SNACK", "MO HUNNY", "CHAMPAGNE HEIST", "BEACH BUM", "BORDEAUX BRAT", "PINK LEMONADE", "RIDIIC", "BLONDE", "COGNAC", "STARSTRUCK", "TRIPPIN", "YACHT LYFE", "CONFETTI", "UNICORN"]


//colors
let color1 = ["https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color1.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color2.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color3.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color4.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color5.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color6.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color7.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color8.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color9.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color10.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color11.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color12.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color13.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color14.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color15.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color16.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color17.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color18.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color19.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color20.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color21.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color22.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color23.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color24.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color25.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color26.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color27.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color28.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color29.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color30.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color31.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color32.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color33.png"]

let color2 = ["https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color1.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color2.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color3.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color4.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color5.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color6.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color7.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color8.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color9.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color10.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color11.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color12.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color13.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color14.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color15.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color16.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color17.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color18.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color19.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color20.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color21.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color22.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color23.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color24.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color25.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color26.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color27.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color28.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color29.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color30.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color31.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color32.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color33.png"]

let color3 = ["https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color1.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color2.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color3.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color4.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color5.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color6.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color7.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color8.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color9.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color10.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color11.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color12.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color13.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color14.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color15.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color16.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color17.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color18.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color19.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color20.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color21.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color22.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color23.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color24.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color25.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color26.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color27.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color28.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color29.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color30.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color31.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color32.png", "https://fentybeauty.s3-us-west-1.amazonaws.com/Fenty+Photos/Foreground/colors/color33.png"]





var makeProduct = () =>{
  let product = {};

  product["name1"] = name1[Math.floor(Math.random() * Math.floor(name1.length))];
  product["name2"] = name2[Math.floor(Math.random() * Math.floor(name2.length))];
  product["name3"] = name3[Math.floor(Math.random() * Math.floor(name3.length))];
  product["color1"] = color1[Math.floor(Math.random() * Math.floor(color1.length))];
  product["color2"] = color2[Math.floor(Math.random() * Math.floor(color2.length))];
  product["color3"] = color3[Math.floor(Math.random() * Math.floor(color3.length))];



  return product;
};


// colors for 100 products
const makeProd = () => {
  let productsArr = [];
  for (let i = 0; i < 10000000; i++) {
    productsArr.push(makeProduct());
  }
  return productsArr;
};

let prod = makeProd();



// seeds the colors table
var seeedsDb = () =>{
  let queries = [];
  for (let i = 0; i < prod.length; i++) {
    // let queryStr = `INSERT INTO prod (name, price, color, category, description, rating, img_id, bkcolor) VALUES ('${prod[i]["name"]}', ${prod[i]["price"]}, '${prod[i]["color"]}', '${prod[i]["category"]}', '${prod[i]["description"]}', ${prod[i]["rating"]}, '${prod[i]["img_id"]}', '${prod[i]["bkcolor"]}');`;

    let queryStr = `INSERT INTO colors (name1, name2, name3, color1, color2, color3) VALUES ('${prod[i]["name1"]}', '${prod[i]["name2"]}', '${prod[i]["name3"]}', '${prod[i]["color1"]}', '${prod[i]["color2"]}', '${prod[i]["color3"]}')`

    db.query(queryStr)
  }
};





// This was just a floating global variable that could cause problems as everything is named products
// let products = createProducts();

//The colorJunc table has proved completely useless as it is just a list from 0 to n.

// var seedJunc = () => {
//   for(var product in products) {
//     // console.log(product)
//     let queryStr = `INSERT INTO colorJunc (colorID, productID) VALUES (${product}, ${product})`
//     db.query(queryStr)
//   }
// }


// seeds the colors table
seeedsDb();

// seeds the photos table
seedsDb();

// seeds the product table
seedDb();

// seeds junction table
// seedJunc()

db.end()



