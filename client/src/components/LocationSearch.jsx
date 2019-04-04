import React from 'react';
import styled from 'styled-components';

const LocationContainer = styled.div`
  grid-column: 1 / 3;
  color: #ccc;
  background: rgba(51, 51, 51, .75);
  padding: 0.5vh 2.25vw;;
  text-align: left;
  border: none;
`;

const Heading = styled.h3`
  margin: 0;
  color: inherit;
  line-height: 1.5;
  font-size: 2.45em;
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
  margin-top 1.75vh;
`;

const IconArrow = styled.span`
  color: white;
  margin-right: 1.4vw;
  font-size: 0.8em;
`;

const Directions = styled.span`
  font-family: Proxima Nova;
  display: block;
  font-weight: 400;
  margin-top: 2.5vh;
  margin-bottom: 1vh;
  font-size: 1.1em;
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

          <Message>Looking for movie tickets? Enter your location to see which movie theaters are playing {this.props.info.info.name} near you.</Message>
        </MessageWrapper>

        <Directions>ENTER CITY, STATE OR ZIP CODE</Directions>

        <input placeholder="City, State or Zip Code" type="text"></input>
        <a href="#">GO</a>

      </LocationContainer>
    )
  }
}

export default LocationSearch;