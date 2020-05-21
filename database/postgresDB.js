const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'fentymain'
});

// const pgp = require('pg-promise')({
//   capSQL: true
// });
// const cn = 'postgres://postgres:@localhost:5432/fentyrecommended';
// const db = pgp(cn);


pool.query('select now()', (err, res) => {
  console.log('connected');
  // pool.end();
});


module.exports = pool;