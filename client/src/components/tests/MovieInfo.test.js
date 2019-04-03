import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MovieInfo from '../MovieInfo';


describe("MovieInfo component", () => {
  it("should render", () => {
    const wrapper = shallow(<MovieInfo />);

    expect(wrapper.exists()).toBe(true);
  });
});