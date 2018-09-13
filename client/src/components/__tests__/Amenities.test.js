import React from 'react';
import { shallow } from 'enzyme';
import Amenities from '../Amenities.jsx';

describe('<Amenities />', () => {
  let wrapper;

  beforeEach(() => {
    const testData = {
      "amenities": {
        "basics": [
          "smoking allowed",
          "wifi",
          "air conditioning",
          "fireplace",
          "TV",
          "essentials (towels, bedsheets, soap, toilet paper, pillows)",
          "shampoo",
          "parking",
          "iron",
          "pets allowed",
          "heating",
          "desk/workspace"
        ],
        "facilities": [
          "washer",
          "pool",
          "gym"
        ],
        "dining": [
          "grill",
          "breakfast",
          "coffee/tea",
          "pizza oven"
        ],
        "safety": "safety card"
      }
    };
    wrapper = shallow(<Amenities {...testData}/>);
  });

  it('should render correctly with props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  xit('should expand options in modal window', () => {
    //write test to open/close modal window
  });

  xit('should scroll with page in modal window', () => {
    //write test to scroll modal window
  });

});