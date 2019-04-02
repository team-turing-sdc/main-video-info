import React from 'react';
import styled from 'styled-components'

const StarRating = ({ score }) => {
  // look into object destructuring
  return (
    <span>
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9733;</span>
    </span>

  );
};

export default StarRating;
