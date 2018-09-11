import React from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch';

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
      </div>
    )
  }
}

export default App;