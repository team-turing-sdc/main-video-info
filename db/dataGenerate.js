var faker = require ('faker');
var fs = require('fs');
var csvWriter = require('csv-write-stream');
var writer = csvWriter();
 let str = [0, 1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 , 14, 15];

var getData = () => {
  return   {
    artist: faker.lorem.words(2),
    albumTitle: faker.lorem.words(2),
    // album:  str.slice(parseInt(Math.random() * 15)),
    artistDescription: faker.lorem.paragraph()
  };
};

var generateAlbums = () => {
  console.time('timing seed');

  writer.pipe(fs.createWriteStream('albums.csv'))
  for(let i = 0; i<10000000; i++){
    var data = getData();
    data.id = i;
    writer.write(data);
  }
  writer.end();
  console.timeEnd('timing seed');
}

generateAlbums();
