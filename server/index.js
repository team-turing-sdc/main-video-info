const express = require('express');
const app = express();
const PORT = process.env.PORT || 2000;
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

// get request for movie info
app.get('/movies', (req, res) => {
  let movieId = req.query.movieID;
  db.getMovieInfo(movieId, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results[0]);
    }
  })
});
// route for getting movie poster
app.get('/movies/poster', (req, res) => {
  // create a db helper function;
  let movieId = req.query.movieID;
  db.getMoviePoster(movieId, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(results);
      res.json(results[0].info.image);
    }
  })
})