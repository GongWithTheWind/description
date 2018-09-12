import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header.jsx';
import CapacityBar from './CapacityBar.jsx';

describe('<Header />', () => {
  let wrapper;

  beforeEach(() => {
    const testData = {
      "name": "Romantic Cabana",
      "propertyType": "earth house",
      "location": "Mandalay, Myanmar",
      "guests": 9,
      "beds": {
        "bedrooms": [
          [
            "floor mattress",
            "king",
            "twin",
            "double"
          ],
          "queen"
        ],
        "commonSpace": [
          "king",
          "couch",
          "queen",
          "floor mattress"
        ]
      },
      "bathrooms": 15,
      "owner": {
        "name": "Michaelangelo",
        "image": "https://s3-us-west-1.amazonaws.com/betterbnb-description/person1.jpeg",
        "contact": "jpjohnson@gmail.com",
        "badge": true
      }
    };
    wrapper = shallow(<Header {...testData}/>);
  });

  it('should render correctly with props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render image for owner\'s picture', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('should have subcomponent called CapacityBar', () => {
    expect(wrapper.find(CapacityBar).length).toEqual(1);
  });

});