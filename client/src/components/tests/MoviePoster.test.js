import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {MoviePoster, PosterDiv, PosterImage} from '../MoviePoster';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import styled from 'styled-components';



describe("MoviePoster component", () => {
  it("should render", () => {
    const wrapper = shallow(<MoviePoster />);

    expect(wrapper.exists()).toBe(true);
  });

  it('applies correct styles to div containing poster', () => {
    const tree = renderer.create(<PosterDiv />).toJSON()
    expect(tree).toHaveStyleRule('position', 'relative');
  });
});