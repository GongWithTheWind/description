import React from 'react';
import { shallow } from 'enzyme';
import Description from '../Description.jsx';

describe('<Description />', () => {
  let wrapper;

  beforeEach(() => {
    const testData = {
      "description": {
        "general": "Adipisicing non sit id dolor et esse nulla qui velit aliqua velit dolor adipisicing anim. Amet consequat excepteur anim esse qui deserunt aute sint aute dolor velit. Labore dolor occaecat aliqua ea veniam ea sit commodo minim ullamco sint veniam. Tempor voluptate sint esse. Cupidatat ad labore laboris irure est commodo. Officia adipisicing velit.",
        "theSpace": "Duis voluptate tempor velit velit Lorem dolor deserunt consequat ullamco voluptate occaecat nostrud. Sit labore ex id velit. Eu cupidatat do commodo ex enim ad in sint duis consequat aute tempor.\n\nEnim voluptate amet aliquip et est ipsum tempor et enim. Incididunt aliqua est esse qui labore Lorem nisi Lorem aliquip adipisicing nisi. Do in sint do et voluptate qui.\n\nMinim sit cupidatat duis enim consectetur consectetur quis eiusmod labore. Mollit esse cillum quis voluptate veniam. Irure voluptate sunt do ex voluptate est minim ut laboris do. Laboris sunt adipisicing excepteur nisi proident tempor laboris cupidatat laboris excepteur aliqua.",
        "guestAccess": "Mollit esse excepteur dolore nisi minim ea consectetur excepteur Lorem. Amet reprehenderit cupidatat laboris consectetur ipsum anim laboris non laborum. Cillum cillum amet dolore ea excepteur Lorem adipisicing dolor ullamco velit duis. Est anim deserunt eiusmod ex consequat proident consectetur laborum ipsum velit.\n\nEu Lorem excepteur excepteur reprehenderit tempor tempor quis magna Lorem sit incididunt velit. Nostrud tempor non dolore sint quis nulla culpa labore aliqua ut. Esse magna excepteur non excepteur id eiusmod fugiat velit magna proident. Adipisicing laboris ullamco do amet reprehenderit consectetur magna culpa. Sit magna irure enim consectetur laboris proident officia proident ut irure id.\n\nEt in laboris. Commodo tempor enim deserunt nulla exercitation nostrud anim velit voluptate minim. Anim veniam exercitation. Eu elit ullamco cupidatat. Et Lorem minim nostrud voluptate.",
        "interactionWithGuests": "Occaecat labore voluptate pariatur proident aliquip esse proident ad voluptate eiusmod laborum non. Do ipsum nisi velit veniam non. Amet mollit voluptate esse occaecat exercitation mollit consequat do adipisicing mollit. Anim culpa dolore eiusmod incididunt.\n\nId adipisicing ad ut sit eiusmod nisi consequat occaecat id. Pariatur eiusmod nulla minim mollit occaecat velit. Nisi pariatur id duis fugiat sint. Eiusmod consequat eiusmod officia minim dolore incididunt in cillum pariatur fugiat. Ea ut dolor incididunt aliqua minim.\n\nQuis enim enim dolore qui consequat duis. Sint incididunt fugiat ex proident ad cillum voluptate sit. Deserunt sint do sunt commodo ad deserunt tempor.",
        "otherThings": "Et nisi irure esse id sit ex eu ullamco excepteur officia amet adipisicing. Aliquip et irure do pariatur qui velit dolore dolor consequat reprehenderit irure. Labore anim officia nostrud excepteur adipisicing qui incididunt.\n\nQuis aliquip culpa dolor minim adipisicing mollit ullamco qui tempor. Aliquip reprehenderit elit minim veniam reprehenderit magna. Cillum et magna sint anim officia proident fugiat Lorem eu. Culpa nostrud culpa cupidatat amet in.\n\nIncididunt sint non sit irure Lorem laborum amet reprehenderit Lorem consequat reprehenderit. Labore sunt mollit amet voluptate commodo sint duis. Laboris aliqua fugiat qui qui sint pariatur ad occaecat qui aliquip voluptate ex occaecat. Amet ullamco ut quis minim eiusmod adipisicing dolore. Est fugiat consectetur irure consectetur duis. Est mollit elit esse voluptate est aliqua minim id dolore sint. Ea labore quis elit."
      }
    };
    wrapper = shallow(<Description {...testData}/>);
  });

  it('should render correctly with props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  xit('should have button to show/hide extra info', () => {
    //write test to simulate button click
  });

});