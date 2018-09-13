import React from 'react';
import { shallow } from 'enzyme';
import PromoBar from '../PromoBar.jsx';

describe('<PromoBar />', () => {
  let wrapper;

  beforeEach(() => {
    const testData = {
      "miniAd": {
        "title": "This home is on people’s minds.",
        "description": "It’s been viewed 500+ times in the past week."
      },
      "highlights": [
        {
          "title": "Hot tub",
          "description": "This is one of few homes in this area that has this feature.",
          "helpful": 0,
          "notHelpful": 0
        },
        {
          "title": "Great value",
          "description": "94% of recent guests gave this home’s value a 5-star rating.",
          "helpful": 0,
          "notHelpful": 0
        }
      ]
    };
    wrapper = shallow(<PromoBar {...testData}/>);
  });

  it('should render correctly with props', () => {
    expect(wrapper).toMatchSnapshot();
  });


  xit('should change helpful thumb icon color on mouseover', () => {
    //write test for changing helpful thumb icon on mouseover
    //https://stackoverflow.com/questions/49934975/how-to-simulate-mouse-over-event-on-a-div-using-enzyme-for-testing-a-react-appli
  });

});