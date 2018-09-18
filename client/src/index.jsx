import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(
  <App homeId={window.location.pathname}/>,
  document.getElementById('app')
);

window.Description = App;