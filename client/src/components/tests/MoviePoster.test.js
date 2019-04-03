import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MoviePoster from '../MoviePoster';
import fetch from 'isomorphic-fetch';


describe("MoviePoster component", () => {
  it("should render", () => {
    const wrapper = shallow(<MoviePoster />);

    expect(wrapper.exists()).toBe(true);
  });
});