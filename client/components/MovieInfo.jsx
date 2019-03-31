import React from 'react';

const MovieInfo = (props) => {
  // look into object destructuring
  return (
    <div>{ props.info.name }</div>
  );
};

export default MovieInfo;