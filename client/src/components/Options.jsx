import React from 'react';
import styled from 'styled-components';

const OptionsContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

const Options = (props) => {
  // look into object destructuring
  return (
    <OptionsContainer>
      <span>SEE IT IN</span>
    </OptionsContainer>
  );
};

export default Options;