import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App.jsx';
import fetch from 'isomorphic-fetch';


describe("App component", () => {
  it("it should render", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
