var pgp = require('pg-promise')(/*options*/)
// var db = pgp('postgres://me:password@localhost:5432/mydb;')
const cn = {
  host: 'localhost',
  port: 5432,
  database: 'mydb',
  user: 'me',
  password: 'password'
};
var db = pgp(cn);


const getMovieInfo = (id, callback) => {
  db.one(`SELECT * fROM movies WHERE id = ${id}`)
    .then(movieInfo => {
      var newObject= {
        name: movieInfo.name,
        info: {
          genre: movieInfo.genre,
          score: movieInfo.score,
          runtime: movieInfo.runtime,
          image: movieInfo.image,
          rating: movieInfo.rating,
          releaseMonth: movieInfo.releasemonth,
          releaseDay: movieInfo.releaseday,
          releaseYear: movieInfo.releaseyear
        }
      }
      console.log(movieInfo)
      callback(null,newObject)
    })
    .catch(error => {
      console.error(error)
    })
}

const getMoviePoster = (id, callback) => {
  db.one(`SELECT image fROM movies WHERE id = ${id}`)
    .then(posterInfo => {
      console.log(posterInfo.image)
      callback(null,posterInfo.image)
    })
    .catch(error => {
      console.error(error)
    })
}

module.exports ={
  getMovieInfo,
  getMoviePoster

}
// const postNewMovie = (movieInfo, callback) =>{
//   const {name,description,releaseng,genre,score,runtime,image,rating} = movieInfo;
//   db.none('INSERT INTO movies(name,description,releaseng,genre,score,runtime,image,rating) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',[name,description,releaseng,genre,score,runtime,image,rating])
//     .then(()=> {
//       callback();
//     })
//     .catch(error => {
//       console.log(error);
//     })
// }
