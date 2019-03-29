const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true});
const db = mongoose.connection;

db.on('connected', () => {
  console.log('fec db connected');
})

// db helper functions

module.exports = {
  db
};