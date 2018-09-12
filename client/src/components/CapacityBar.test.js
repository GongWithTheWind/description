import React from 'react';
import { shallow, mount } from 'enzyme';
import CapacityBar from './CapacityBar.jsx';

describe('<CapacityBar />', () => {
  let wrapper;

  beforeEach(() => {
    const testData = {
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
      "bathrooms": 15
    };
    wrapper = shallow(<CapacityBar {...testData}/>);
  });

  it('should render correctly with props', () => {
    expect(wrapper).toMatchSnapshot();
  });

});