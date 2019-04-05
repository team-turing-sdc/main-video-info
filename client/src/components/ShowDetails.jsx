import React from 'react';
import styled from 'styled-components';

const TheaterName = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-family: Alternate Gothic No1 D;
  font-size: 2em;
  font-weight: 700;
  color: #3d7de5;
  letter-spacing: 1px;
  :hover {
    color: #2d77ef;
    transition: .3s linear;
  }
`;
const ShowDetails = (props) => {
  // look into object destructuring
  return (
    <div>
      <TheaterName href="#">{props.cinema.cinema_name}</TheaterName>
    </div>
  );
};

export default ShowDetails;