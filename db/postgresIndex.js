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
  db.one(`SELECT image FROM movies WHERE id = ${id}`)
    .then(posterInfo => {
      console.log(posterInfo.image)
      callback(null,posterInfo.image)
    })
    .catch(error => {
      console.error(error)
    })
}

const postNewMovie = (movieInfo, callback) =>{
  db.one(`INSERT INTO movies(id ,name,releaseday,releaseMonth, releaseYear,genre,score,runtime,image,rating) VALUES(nextval('movies_seq'),'${movieInfo.name}', ${movieInfo.releaseDay}, '${movieInfo.releaseMonth}', ${movieInfo.releaseYear}, '${movieInfo.genre}', ${movieInfo.score}, ${movieInfo.runtime}, '${movieInfo.image}', ${movieInfo.rating}) RETURNING id`)
    .then((id)=> {
      callback(null, id);
    })
    .catch(error => {
      console.log(error);
    })
}

const deleteMovie = (id, callback) => {
  db.none(`DELETE FROM movies WHERE id = ${id}`)
    .then( () => {
      callback()
    })
    .catch(error => {
      console.error(error)
    })
}

const updateMovie = (movieInfo, callback) => {
  db.one(`UPDATE movies SET name = '${movieInfo.name}', releaseday = ${movieInfo.releaseDay},  releasemonth ='${movieInfo.releaseMonth}', releaseyear =${movieInfo.releaseYear}, genre = '${movieInfo.genre}', score =  ${movieInfo.score}, runtime = ${movieInfo.runtime}, image = '${movieInfo.image}', rating = ${movieInfo.rating} WHERE id = ${movieInfo.id} RETURNING id `)
    .then( (id) => {
      callback(null,id)
    })
    .catch(error => {
      console.error(error)
    })
}

module.exports ={
  getMovieInfo,
  getMoviePoster,
  postNewMovie,
  deleteMovie,
  updateMovie
}
