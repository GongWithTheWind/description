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
    this.state = { home: '' };
  }

  componentDidMount() {
    this.getHome(160);
  }

  getHome(homeId) {
    fetch(`/descriptions/${homeId}`)
      .then(response => {
        return response.json();
      }).then(data => {
        this.setState({ home: data[0] });
      });
  }

  render() {
    if (this.state.home === '') { return <div></div> }
    else {
      return (
        <div id='homeId'>
          <h1>{this.state.home.homeId}</h1>
          <Header {...this.state.home}/>
          <PromoBar />
          <Description />
          <Contact />
          <Amenities />
          <Beds />
        </div>
      )
    }
  }
}

export default App;