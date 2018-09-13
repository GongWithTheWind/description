import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.jsx';
import Header from '../Header.jsx';
import PromoBar from '../PromoBar.jsx';
import Description from '../Description.jsx';
import Contact from '../Contact.jsx';
import Amenities from '../Amenities.jsx';
import SleepArrangements from '../SleepArrangements';

describe('<App />', () => {

  it('should render correctly with no props', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  it('should have subcomponent called Header', () => {
    expect(shallow(<App />).find(Header).length).toEqual(1);
  });

  it('should have subcomponent called PromoBar', () => {
    expect(shallow(<App />).find(PromoBar).length).toEqual(1);
  });

  it('should have subcomponent called Description', () => {
    expect(shallow(<App />).find(Description).length).toEqual(1);
  });

  it('should have subcomponent called Contact', () => {
    expect(shallow(<App />).find(Contact).length).toEqual(1);
  });

  it('should have subcomponent called Amenities', () => {
    expect(shallow(<App />).find(Amenities).length).toEqual(1);
  });

  it('should have subcomponent called Beds', () => {
    expect(shallow(<App />).find(SleepArrangements).length).toEqual(1);
  });

});