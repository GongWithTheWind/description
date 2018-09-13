import React from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch';
import Header from './Header.jsx';
import PromoBar from './PromoBar.jsx';
import Description from './Description.jsx';
import Contact from './Contact.jsx';
import Amenities from './Amenities.jsx';
import SleepArrangements from './SleepArrangements.jsx';
import data from './../../../seeds/descriptions.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { home: data[0] };
  }

  componentDidMount() {
    this.getHome(160);
  }

  getHome(homeId) {
    fetch(`http://localhost:3002/descriptions/${homeId}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ home: data[0] });
      });
  }

  render() {
    return (
      <div id="home">
        <Header {...this.state.home}/>
        <PromoBar {...this.state.home}/>
        <Description {...this.state.home}/>
        <Contact {...this.state.home}/>
        <Amenities {...this.state.home}/>
        <SleepArrangements {...this.state.home}/>
      </div>
    )
  }
}

export default App;