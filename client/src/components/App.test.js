import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';

describe('App', () => {
  // it('should render correctly in "debug" mode', () => {
  //   const component = shallow(<App debug />);
  
  //   expect(component).toMatchSnapshot();
  // });

  it('should render without throwing an error', () => {
    expect(shallow(<App />).find('#homeId').exists()).toBe(true)
  });

});