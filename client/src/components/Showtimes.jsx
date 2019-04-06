import React from 'react';
import styled from 'styled-components';

// STYLED COMPONENTS
const ShowtimeButton = styled.a`
  display: inline-block;
  margin-top: 1vh;
  background: #f15500;
  border-radius 5px;
  color: white;
  text-align: center;
  font-family: Proxima Nova, Helvetica;
  width: 4vw;
  margin-right: 0.75vw;
`;

// REACT COMPONENTS
const Showtimes = (props) => {
  // convert from military time to regular time
  let time = props.showing.start_time;
  if (Number(time[0] + time[1]) > 12) {
    let firstTwo = Number(time[0] + time[1]) - 12;
    let lastTwo = time[3] + time[4];
    var convertedTime = `${firstTwo.toString()}:${lastTwo}`;
  }

  return (
    <span>
      <ShowtimeButton>
        {convertedTime ? convertedTime : time}
      </ShowtimeButton>
    </span>
  );
};

export default Showtimes;