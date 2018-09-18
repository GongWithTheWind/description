import React from 'react';
import 'isomorphic-fetch';
import Header from './Header.jsx';
import PromoBar from './PromoBar.jsx';
import Description from './Description.jsx';
import Contact from './Contact.jsx';
import Amenities from './Amenities.jsx';
import SleepArrangements from './SleepArrangements.jsx';
import data from './../../../seeds/descriptions.json';
import styled from 'styled-components';

const ModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
`;

const SectionBreakLine = styled.hr`
  margin: 20px 20px 10px 10px;
  border: 0;
  height: 1px;
  background-color: #e6e6e6;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { home: data[0] };
  }

  componentDidMount() {
    this.getHome(180);
  }

  getHome(homeId) {
    fetch(`http://localhost:3002/descriptions/${homeId}`)
      .then(response => {
        return response.json();
      })
      .then(results => {
        this.setState({ home: results[0] });
      });
  }

  render() {
    return (
      <ModuleContainer id="home">
          <Header {...this.state.home}/>
          <PromoBar {...this.state.home}/>
          <Description {...this.state.home}/>
          <Contact {...this.state.home}/>
          <SectionBreakLine></SectionBreakLine>
          <Amenities {...this.state.home}/>
          <SectionBreakLine></SectionBreakLine>
          <SleepArrangements {...this.state.home}/>
          <SectionBreakLine></SectionBreakLine>
      </ModuleContainer>
    )
  }
}

export default App;