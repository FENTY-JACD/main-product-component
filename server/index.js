const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router.js');
const pool = require('../database/dbHelpers.js');


const app = express();
const port = process.env.PORT || 8080;

// app.get('/', (req, res) => res.send('Hello World!'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api', router);

// app.get('/name', (req, res) => res.send('Hello Jordan!'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

app.get('/bundle.js', (req, res) => {
  if (err) {
    console.error(err);
  }
  res.status(200).sendFile('./Jordan-Proxy/index.html');
});

app.get('/:id', (req, res) => {
  let id = req.params;
  pool.getProduct(id, (err, results) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.render('../client/dist', { results }, (err, html) => {
        res.send(html)
      });
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });

