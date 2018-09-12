import React from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch';
import Header from './Header.jsx';
import PromoBar from './PromoBar.jsx';
import Description from './Description.jsx';
import Contact from './Contact.jsx';
import Amenities from './Amenities.jsx';
import Beds from './Beds.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {}
    };
  }

  componentDidMount() {
    this.getHome(160);
  }

  getHome(homeId) {
    fetch(`/descriptions/${homeId}`)
      .then(response => {
        return response.json();
      }).then(data => {
        console.log(data[0]);
        this.setState({ home: data[0] });
      });
  }

  render() {
    return (
      <div id='homeId'>
        <h1>{this.state.home.homeId}</h1>
        <Header propertyType={this.state.home.propertyType} name={this.state.home.name} location={this.state.home.location} 
          owner={this.state.home.owner} guests={this.state.home.guests} beds={this.state.home.beds} bathrooms={this.state.home.bathrooms}/>
        <PromoBar />
        <Description />
        <Contact />
        <Amenities />
        <Beds />
      </div>
    )
  }
}

export default App;