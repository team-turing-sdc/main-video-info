import React from 'react';
import styled from 'styled-components';

const TheaterName = styled.a`
  
`;
const ShowDetails = (props) => {
  // look into object destructuring
  return (
    <div>
      <a href="#">{props.cinema.cinema_name}</a>
    </div>
  );
};

export default ShowDetails;