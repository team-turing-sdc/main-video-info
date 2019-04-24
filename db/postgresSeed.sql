DROP movies;

CREATE TABLE IF NOT EXISTS movies(id int primary key NOT NULL, name varchar(50) ,genre varchar(100),score int,runtime int, image varchar(300), rating varchar(10), releaseMonth varchar(50), releaseDay int, releaseYear int);


COPY movies(name,genre,score,runtime,image,rating, releaseMonth, releaseDay, releaseYear, id) FROM '/mnt/c/Users/Mich/Documents/GitHub/main-video-info/db/titleInfo.csv' DELIMITER ',' CSV HEADER;
