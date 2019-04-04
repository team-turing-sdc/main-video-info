import React from 'react';
import styled from 'styled-components';

const LocationContainer = styled.div`
  grid-column: 1 / 3;
  color: #ccc;
  background: rgba(51, 51, 51, .75);
  padding: 0.5vh 1.5vw;;
  text-align: left;
  border: none;
`;

const Heading = styled.h3`
  margin: 0;
  color: inherit;
  line-height: 1;
  font-size: 2.15em;
`;

const Message = styled.div`
  margin-bottom: 1vh;
  margin-top 0.5vh;
`;

const IconArrow = styled.span`
  color: white;
`;

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LocationContainer>
        <Message>
          <Heading>
            <IconArrow>
              <i class="fas fa-location-arrow"></i>
            </IconArrow>
            TELL US WHERE YOU ARE
          </Heading>
        </Message>

      </LocationContainer>
    )
  }
}

export default LocationSearch;