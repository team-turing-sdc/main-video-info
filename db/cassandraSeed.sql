DROP movies;

CREATE TABLE IF NOT EXISTS dev.movies(id int PRIMARY KEY, name text,genre text,score int,runtime int, image text, rating text, releaseMonth text, releaseDay int, releaseYear int);

COPY dev.movies(name,genre,score,runtime,image,rating, releaseMonth, releaseDay, releaseYear, id) FROM '/mnt/c/Users/Mich/Documents/GitHub/main-video-info/db/titleInfo.csv' WITH header=true and delimiter =',';