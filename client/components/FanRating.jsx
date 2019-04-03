import React from 'react';
import styled from 'styled-components';

const FanRatingWrapper = styled.div`
  font-family: "Times New Roman";
  font-style: italic;
  color: white;
  text-align: center;
  padding-top: 0.5vh;
`;

const ScoreContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 35% 35% 15%;
  grid-template-rows: 75% 25%;
  margin-top: 1em;
`;


const FanRating = (props) => {
  let percentageScore = Math.floor(Math.random() * 100);
  if (percentageScore >= 65) {
    return (
      <div>
        <FanRatingWrapper>{Math.floor(Math.random() * 50000)} Fan Ratings</FanRatingWrapper>
        <ScoreContainer>
          <img src="https://img.icons8.com/color/48/000000/tomato.png"/>
          <span>{percentageScore}%</span>
        </ScoreContainer>

      </div>
    );
  } else {
    return (
      <div>
        <FanRatingWrapper>{Math.floor(Math.random() * 50000)} Fan Ratings</FanRatingWrapper>
        <ScoreContainer>
          <img src="https://img.icons8.com/color/48/000000/rotten-tomatoes.png"/>
          <span>{percentageScore}%</span>
        </ScoreContainer>

      </div>
    );
  }

};

export default FanRating;