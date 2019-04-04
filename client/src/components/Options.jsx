import React from 'react';
import styled from 'styled-components';

const OptionsContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  border: 1px solid #5c5c5c;
  text-align: left;
  font-family: Proxima Nova;
`;
const Title = styled.div`
  display: inline-block;
  background-color: #5c5c5c;
  font-size: 14px;
  color: #c4c4c4;
  text-align: center;
  height: 95%;
  width: 20%;
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