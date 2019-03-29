const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true});
const db = mongoose.connection;

db.on('connected', () => {
  console.log('fec db connected');
})
// db schema ???
let movieInfoSchema = mongoose.Schema({
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
// db helper functions
let getMovieName = () => {
  db.collection
};


module.exports = {
  db
};