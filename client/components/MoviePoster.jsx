import React from 'react';
import styled from 'styled-components';
// styled components
const PosterImage = styled.img`
  height: 40vh;
  width: 18vw;
  transition: transform .3s ease;
  ${PosterImage}:hover {
    transform: scale(1.075);
  }
`;
const PosterDiv = styled.div`
  display: inline-block;
  overflow: hidden;
`;


const MoviePoster = ({ poster }) => {
  // look into object destructuring
  return (
    <PosterDiv>
      <PosterImage src={poster}/>
    </PosterDiv>
  );
};

export default MoviePoster;