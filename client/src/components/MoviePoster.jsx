import React from 'react';
import styled from 'styled-components';
// styled components
const PosterImage = styled.img`
  height: 38vh;
  width: 18vw;
  opacity: 1;
  transition: opacity .25s, transform .25s ease;
  :hover {
    transform: scale(1.09);
    opacity: 0.7;
  }
`;

const PosterDiv = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
`;


const MoviePoster = ({ poster }) => {
  // look into object destructuring
  return (
    <PosterDiv>
      <PosterImage src={poster}/>
    </PosterDiv>
  );
};

export {
  MoviePoster,
  PosterDiv,
  PosterImage
};