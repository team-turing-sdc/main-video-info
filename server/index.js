const express = require('express');
const app = express();
const PORT = 2000 || process.env.PORT;
const db = require('../db/index.js').db;
const bodyParser = require('body-parser');

app.use(express.static('client/dist'))
app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

// get request example
app.get('/movies', (req, res) => {
  // query into db
 console.log('Testing');
 res.send('hi');
});