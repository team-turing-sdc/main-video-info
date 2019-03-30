const express = require('express');
const app = express();
const PORT = 2000 || process.env.PORT;
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.static('client/dist'))
app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json())
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

// get request example
app.get('/movies', (req, res) => {
  console.log(req.body);
  let movieId = req.body.id;
  db.getMovieInfo(movieId, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  })
});
// route for getting movie poster
app.get('/movies/poster', (req, res) => {
  // create a db helper function
  console.log(req.body);
  res.send('test');
})