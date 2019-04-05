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

const Subheading = styled.div`
  color: #ccc;
  font-family: Proxima Nova, Helvetica;
  font-size: 1em;

`;
const ShowDetails = (props) => {
  let currentDate = new Date();
  let month = currentDate.toLocaleString('en-us', { month: 'long'});
  let day = currentDate.getUTCDate();
  let dayOfWeek = currentDate.toLocaleString('en-us', { weekday: 'long' });
  let year = currentDate.getUTCFullYear();
  return (
    <div>
      <TheaterName href="#">{props.cinema.cinema_name}</TheaterName>
      <Subheading>Movie Times for {`${dayOfWeek}, ${month} ${day}, ${year}`}</Subheading>
      {/* showtime buttons */}
      {
        props.cinema.showings.Standard.times.map((showing, i) => {
          return <Showtimes key={i} showing={showing}/>
        })
      }

    </div>
  );
};

export default ShowDetails;