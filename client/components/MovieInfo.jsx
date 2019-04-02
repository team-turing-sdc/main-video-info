import React from 'react';
import styled from 'styled-components';

// styled components below

const ReleaseDate = styled.li`
  font-family: Alternate Gothic No1 D;
  color: white;
  font-size: 2.15em;
`;
const InfoList = styled.li`
  font-family: "Times New Roman";
  font-style: italic;
  color: #CCC;
`;
const InfoContainer = styled.ul`
  text-align: center;
  list-style-type: none;
  line-height: 1.4;
  padding: 0;
`;

class MovieInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formatRuntime(minutes) {
    let hours = Math.floor(minutes / 60);
    let mins = (minutes) - (60 * hours);
    let formattedTime = `${hours} hr ${mins} min`;
    return formattedTime;
  }

  render() {
    if (!this.props.info) {
      return (<div></div>)
    }
    return (

      <div>
        <InfoContainer>
          <InfoList>Released</InfoList>
          <ReleaseDate >{this.props.info.info.releaseMonth.toUpperCase()} {this.props.info.info.releaseDay}, {this.props.info.info.releaseYear}
          </ReleaseDate>
          <InfoList>{this.props.info.info.rating}, {this.formatRuntime(this.props.info.info.runtime)}</InfoList>
        </InfoContainer>
      </div>
    );
  }

};

export default MovieInfo;