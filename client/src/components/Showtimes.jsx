import React from 'react';
import styled from 'styled-components';

// STYLED COMPONENTS
const ShowtimeButton = styled.a`
  margin-top: 1vh;
  background: #f15500;
  border-radius 5px;
  color: white;
`;

// REACT COMPONENTS
const Showtimes = (props) => {
  // convert from military time to regular time
  let time = props.showing.start_time;
  
  return (
    <div>
      <ShowtimeButton>
        {props.showing.start_time}
      </ShowtimeButton>
    </div>
  );
};

export default Showtimes;