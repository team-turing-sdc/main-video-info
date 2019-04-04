import React from 'react';
import { shallow, mount, render } from 'enzyme';
import StarRating from '../StarRating';
import styled from 'styled-components';



describe("StarRating component", () => {
  it("should render", () => {
    const wrapper = shallow(<StarRating />);

    expect(wrapper.exists()).toBe(true);
  });

});