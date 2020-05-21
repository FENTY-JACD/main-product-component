// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'chris',
//   database: 'fenty'
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ', err);
//     return;
//   }
// });

// // No Clue why this was here, I think it's to check that the DB is functioning.
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution to 1 + 1 is: ', results[0].solution);
// });


// module.exports = connection;