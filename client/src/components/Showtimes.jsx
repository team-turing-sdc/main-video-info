import React from 'react';
import styled from 'styled-components';

const Showtimes = (props) => {
  return (
    <div>
      {props.showing.start_time}
    </div>
  );
};

export default Showtimes;