import React from 'react';
import styled from 'styled-components';
// styled components
const PosterImage = styled.img`
  height: 40vh;
  width: 18vw;
`;


const MoviePoster = ({ poster }) => {
  // look into object destructuring
  return (
    <div>
      <PosterImage src={poster}/>
    </div>
  );
};

export default MoviePoster;