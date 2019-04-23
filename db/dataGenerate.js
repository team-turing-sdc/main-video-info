const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
const faker = require ('faker');
var rating = ['G','PG','PG-13','R']
var genre = ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "History", "Horror", "Music", "Musical", "Mystery", "Romance", "Sci-Fi"]
var count = 0;

function randomNum(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function titleInfo() {
  return {
    name: faker.lorem.words(3),
    genre: genre[randomNum(1,genre.length-1)],
    score: randomNum(1,10),
    runtime: randomNum(100,150),
    image: faker.image.avatar(),
    rating: rating[randomNum(0, 3)],
    releaseMonth:faker.date.month(),
    releaseDay:randomNum(1,30),
    releaseYear:randomNum(1980,2018)
  }
}

function recursiveData () {
  for(var i = 0; i <1000000; i++){
    var data = titleInfo();
    data.id = (count * 1000000) + i;

    writer.write(data, ()=> {
      if(count < 9 && i === 1000000){
        count++;
        recursiveData();
      }
      if(count === 9) {
        writer.end();
      }
    })
  }
}

function titleGen() {
  writer.pipe(fs.createWriteStream('titleInfo.csv'));
  console.time('TitleInfo done')
  recursiveData();

  writer.on('finish', () =>{
    console.timeEnd('TitleInfo done')
    console.log('All files writen');
  })

}


titleGen();
