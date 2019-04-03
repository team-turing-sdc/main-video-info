import React from 'react';
import styled from 'styled-components';

const FanRatingWrapper = styled.div`
  font-family: "Times New Roman";
  font-style: italic;
  color: white;
  text-align: center;
  padding-top: 0.5vh;
`;

const FanRating = (props) => {
  // look into object destructuring
  return (
    <div>
      <FanRatingWrapper>{Math.floor(Math.random() * 50000)} Fan Ratings</FanRatingWrapper>
    </div>
  );
};

export default FanRating;