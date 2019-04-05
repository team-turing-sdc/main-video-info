import React from 'react';
import ShowDetails from './ShowDetails.jsx';
import styled from 'styled-components';
const Example = styled.div`
  color: white;
`;
class LocationShowTimes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

      return(
        <div>
          {
            this.props.showInfo.cinemas.map((cinema, i) => {
              return <ShowDetails key ={i} cinema={cinema}/>
            })
          }
        </div>
      )
  }
}

export default LocationShowTimes;