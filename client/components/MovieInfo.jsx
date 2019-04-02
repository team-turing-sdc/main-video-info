import React from 'react';
import styled from 'styled-components';

// styled components below

const ReleaseDate = styled.li`
  font-family: Alternate Gothic No1 D;
  color: white;
`;

const MovieInfo = (props) => {
  if (!props.info) {
    return (<div></div>)
  }
  return (
    <div>
      <ul>
      {props.info.name}
      {props.info.info.rating}
      <ReleaseDate >{props.info.info.release}</ReleaseDate>
      </ul>
    </div>
  );
};

export default MovieInfo;