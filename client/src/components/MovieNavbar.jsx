import React from 'react';
import styled from 'styled-components';

const MovieNavbar = (props) => {

  return (
    <div>
      <h1>{props.movie.info.name} ({props.movie.info.releaseYear})</h1>
      <ul>
        <li>Overview</li>
        <li>Movie Times + Tickets</li>
        <li>Synopsis</li>
        <li>Movie Reviews</li>
        <li>Trailers</li>
        <li>More</li>
      </ul>
    </div>
  );
};

export default MovieNavbar;