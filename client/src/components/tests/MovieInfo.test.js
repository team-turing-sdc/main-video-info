import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {MovieInfo, InfoList, InfoContainer, StarRatingContainer, ReleaseDate} from '../MovieInfo';
import FanRating from '../FanRating';


describe("MovieInfo component", () => {

  it("should render", () => {
    const wrapper = shallow(<MovieInfo />);

    expect(wrapper.exists()).toBe(true);
  });

  it("renders children components", () => {
    const wrapper = shallow(
      <MovieInfo>
        <div>Child</div>
      </MovieInfo>
      );
    expect(wrapper.contains(<div/>)).toBe(true);
  });

});