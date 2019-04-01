import React from 'react';
import styled from 'styled-components';
// styled components



const MoviePoster = ({ poster }) => {
  // look into object destructuring
  return (
    <div>
      <img src={poster}/>
    </div>
  );
};

export default MoviePoster;