const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true});
const db = mongoose.connection;

db.on('connected', () => {
  console.log('fec db connected');
})
// db schema ???
const movieInfoSchema = mongoose.Schema({
  id: Number,
  name: String,
  info: {
    description: String,
    release: String,
    genre: String,
    score: Number,
    runtime: Number,
    image: String,
    rating: String
  }
});

let Movie = mongoose.model('Movie', movieInfoSchema);
// db helper functions
// grab all info related to movie except for poster
let getMovieInfo = (id, callback) => {
  let query = Movie.find({'id': id});
  query.exec((err, result) => {
    if (err) {
      callback(err, null);
    }
    callback(null, result);
  });
};

// get the poster image from db
let getMoviePoster = (id, callback) => {
  let query = Movie.find( {'id': id} );
  query
    .select('image')
    .exec((err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
};


module.exports = {
  db: db,
  getMovieInfo: getMovieInfo,
  getMoviePoster: getMoviePoster

};