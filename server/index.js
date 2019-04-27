const nr =require('newrelic');
const express = require('express');
const app = express();
const db = require('../db/postgresIndex.js');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require ('path');
var DIST_DIR = path.join(__dirname, '../client/dist');

const PORT = process.env.PORT || 2000;

app.use( express.static('client/dist'))
app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json())
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})


// get request for movie info
app.get('/movies', (req, res) => {
  // if time, refactor to not use query
  let movieId = req.query.movieID;
  db.getMovieInfo(movieId, (err, results) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json(results);
    }
  })
});

// route for getting movie poster
app.get('/movies/poster', (req, res) => {
  let movieId = req.query.movieID;
  db.getMoviePoster(movieId, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  })
})

app.post('/movies/API/newMovie', (req, res) => {
  console.log(req.body)
    db.postNewMovie(req.body, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    })
})

app.delete('/movies/API/oldMovie', (req, res) => {
  db.deleteMovie(req.body.id, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  })
})

app.put('/movies/API/updateMovie', (req, res) => {
  db.updateMovie(req.body, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  })
})


app.get('/*', (req, res) => {
  res.sendFile(DIST_DIR + "/index.html")
})
