import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../Contact.jsx';

describe('<Contact />', () => {
  let wrapper;

  beforeEach(() => {
    const testData = {
      "owner": {
        "name": "Michaelangelo",
        "image": "https://s3-us-west-1.amazonaws.com/betterbnb-description/person1.jpeg",
        "contact": "jpjohnson@gmail.com",
        "badge": true
      }
    };
    wrapper = shallow(<Contact {...testData}/>);
  });

  it('should render correctly with props', () => {
    expect(wrapper).toMatchSnapshot();
  });

});