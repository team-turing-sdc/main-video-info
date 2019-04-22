var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://me:password@localhost:5432/mydb')

const seedDb = () => {
  var values = {
    delimiter: ',',
    path: '/mnt/c/Users/Mich/Documents/GitHub/main-video-info/db/titleInfo.csv'
  };
  db.none('CREATE TABLE movie(name, description ,genre ,score ,runtime , image, rating ,releaseMonth ,releaseDay , releaseYear')
    .then(() =>{
      db.none('COPY (SELECT * FROM titleInfo) TO ${path} WITH CSV DELIMITER ${delimiter}', values)
        .then(() => {
          console.log('SEEDED')
        })
      })
    .catch(error => {
      console.log(error)
    })
}

const postNewMovie = (movieInfo, callback) =>{
  const {name,description,releaseng,genre,score,runtime,image,rating} = movieInfo;
  db.none('INSERT INTO movies(name,description,releaseng,genre,score,runtime,image,rating) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',[name,description,releaseng,genre,score,runtime,image,rating])
    .then(()=> {
      callback();
    })
    .catch(error => {
      console.log(error);
    })
}
seedDb();
module.exports ={
  seedDb,
  postNewMovie
}

// const testing = (request, response) => {
//   const {
//     id,
//     name,
//     description,
//     releaseng,
//     genre,
//     score,
//     runtimeer,
//     image,
//     rating
//     } =
// }
// create table movies (id serial primary key, name varchar(50), description varchar(300), release varchar(30), genre varchar(30), score int, runtime int, image varchar(200), rating varchar(50));