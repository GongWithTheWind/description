import React from 'react';
import { shallow } from 'enzyme';
import SleepArrangements from '../SleepArrangements.jsx';

describe('<SleepArrangements />', () => {
  let wrapper;

  beforeEach(() => {
    const testData = {
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
      }
    };
    wrapper = shallow(<SleepArrangements {...testData}/>);
  });

  it('should render correctly with props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render images for beds', () => {
    expect(wrapper.find('img').length).not.toBeLessThan(0);
  });

});