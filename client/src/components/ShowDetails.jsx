import React from 'react';
import Showtimes from './Showtimes.jsx'
import styled from 'styled-components';

const TheaterName = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-family: ProximaNovaW01-Bold, Helvetica;
  font-size: 1.55em;
  color: #4AA7F6;
  // letter-spacing: 1px;
  :hover {
    color: #2d77ef;
    transition: .3s linear;
  }
`;
const ShowDetails = (props) => {
  return (
    <div>
      <TheaterName href="#">{props.cinema.cinema_name}</TheaterName>
      {
        props.cinema.showings.Standard.times.map((showing, i) => {
          return <Showtimes key={i} showing={showing}/>
        })
      }

    </div>
  );
};

export default ShowDetails;