import React from 'react';


// STYLED COMPS
const Stars = window.styled.span`
  font-size: 1.55em;
`;

const OrangeStar = window.styled.span`
  letter-spacing: 1px;
  color: #f15500;
  unicode-bidi: bidi-override;
  direction: rtl;
  :hover::before,
  :hover ~ span:before {
    color: #e0b60f;
    position: absolute;
    content: '★';
  }
`;

const EmptyStar = window.styled.span`
  color: #999999;
  unicode-bidi: bidi-override;
  direction: rtl;
  :hover::before,
  :hover ~ span:before {
    color: #e0b60f;
    position: absolute;
    content: '★';
  }
`;


//  REACT COMPS

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.score
    };
  }
  render() {
    if (this.state.rating === 5) {
      return (
        <Stars>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>

        </Stars>
      )
    } else if (this.state.rating === 4) {
      return (
        <Stars>
          <EmptyStar>&#9733;</EmptyStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
        </Stars>
      )
    } else if (this.state.rating === 3) {
      return (
        <Stars>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
        </Stars>
      )
    } else if (this.state.rating === 2) {
      return (
        <Stars>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
        </Stars>
      )
    } else if (this.state.rating === 1) {
      return (
        <Stars>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <OrangeStar>&#9733;</OrangeStar>
        </Stars>
      )
    } else {
      return (
        <Stars>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
        </Stars>
      )
    }
  }

}

export default StarRating;
export {
  OrangeStar
}
