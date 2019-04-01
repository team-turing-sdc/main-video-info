import React from 'react';

const MovieInfo = (props) => {
  if (!props.info) {
    return (<div></div>)
  }
  return (
    <div>
      {props.info.name}
      {props.info.info.description}
    </div>
  );
};

export default MovieInfo;