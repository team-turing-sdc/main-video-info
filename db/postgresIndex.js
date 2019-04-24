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



const getMovieInfo = (req, res) => {
  db.one(`SELECT * fROM movies WHERE id = ${id}`)
    .then(movieInfo => {
      console.log(movieInfo)
      res.json(movieInfo);
    })
    .catch(error => {
      console.error(error)
    })
}

module.exports ={
  seedDb,
  getMovieInfo
  // postNewMovie
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
