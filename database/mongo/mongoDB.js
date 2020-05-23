var mongoose = require('mongoose');
var schema = require('./mongoSchema')


mongoose.connect('mongodb://localhost/fenty', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database")
});



var Products = mongoose.model('Products', schema);



module.exports = Products
