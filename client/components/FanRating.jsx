import React from 'react';
import styled from 'styled-components';

const FanRatingWrapper = styled.div`
  font-family: "Times New Roman";
  font-style: italic;
  color: white;
  text-align: center;
  padding-top: 0.5vh;
`;

const Icon = styled.img`
  display: block;
  margin-top: 1em;
  margin-left: auto;
  margin-right: auto;
  width 25%;
`;

const FanRating = (props) => {
  let percentageScore = Math.floor(Math.random() * 100);
  if (percentageScore >= 65) {
    return (
      <div>
        <FanRatingWrapper>{Math.floor(Math.random() * 50000)} Fan Ratings</FanRatingWrapper>
        <Icon src="https://img.icons8.com/color/48/000000/tomato.png"></Icon><span>{percentageScore}%</span>
      </div>
    );
  } else {
    return (
      <div>
        <FanRatingWrapper>{Math.floor(Math.random() * 50000)} Fan Ratings</FanRatingWrapper>
        <Icon src="https://img.icons8.com/color/48/000000/rotten-tomatoes.png"></Icon><span>{percentageScore}%</span>
      </div>
    );
  }

};

export default FanRating;