import React from 'react';
import styled from 'styled-components';

// styled components below

const ReleaseDate = styled.li`
  font-family: Alternate Gothic No1 D;
  color: white;
`;

class MovieInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.info) {
      return (<div></div>)
    }
    return (

      <div>
        <ul>
        {this.props.info.name}
        {this.props.info.info.rating}
        <ReleaseDate >{this.props.info.info.releaseMonth} {this.props.info.info.releaseDay}, {this.props.info.info.releaseYear}</ReleaseDate>
        </ul>
      </div>
    );
  }

};

export default MovieInfo;