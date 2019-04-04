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
  font-family: Alternate Gothic No1 D;
  vertical-align: middle;
  letter-spacing: 1px;
  font-weight: 400;
`;

const Message = styled.p`
  font-family: Proxima Nova;
`;

const MessageWrapper = styled.div`
  margin-bottom: 1vh;
  margin-top 0.5vh;
`;

const IconArrow = styled.span`
  color: white;
  margin-right: 1vw;
`;

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LocationContainer>
        <MessageWrapper>
          <Heading>
            <IconArrow>
              <i class="fas fa-location-arrow"></i>
            </IconArrow>
            TELL US WHERE YOU ARE
          </Heading>

          <Message>Looking for movie tickets? Enter your location to see which movie theaters are playing this movie near you.</Message>
        </MessageWrapper>

      </LocationContainer>
    )
  }
}

export default LocationSearch;