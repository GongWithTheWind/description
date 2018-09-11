import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getHouse() {
    fetch('/descriptions/101')
      .then(response => {
        return response.json();
      }).then(data => {
        console.log(data);
      });
  }

  render() {
    this.getHouse();
    return (
      <div>
        <h1>Hellooooooooo</h1>
      </div>
    )
  }
}

export default App;