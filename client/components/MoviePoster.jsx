import React from 'react';

const MoviePoster = ({ poster }) => {
  // look into object destructuring
  return (
    <div><img src={poster}/></div>
  );
};

export default MoviePoster;