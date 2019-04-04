import React from 'react';
import styled from 'styled-components';

const OptionsContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  border: 1px solid #5c5c5c;
  font-family: Proxima Nova;
  overflow: hidden;
`;
const Title = styled.div`
  display: inline-block;
  background-color: #5c5c5c;
  font-family: Proxima Nova;
  font-size: 13px;
  color: #c4c4c4;
  height: 100%;
  width: 15%;
  overflow: hidden;
  text-align: center;
  padding: 1.75vh 0.75vw 1vh 0.75vw;
  vertical-align: top;
  transform: scale(1 , 1.45);
`;
const Options = (props) => {
  // look into object destructuring
  return (
    <OptionsContainer>
      <Title>SEE IT IN</Title>
    </OptionsContainer>
  );
};

export default Options;