import React from 'react';
import styled from 'styled-components';


const ShowDetails = (props) => {
  // look into object destructuring
  return (
    <div>
      {props.cinema.cinema_name}
    </div>
  );
};

export default ShowDetails;