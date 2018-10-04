import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

let homeId = window.location.pathname.slice(1, window.location.pathname.length - 1);
ReactDOM.render(
  <App homeId={homeId} />,
  document.getElementById('app')
);

// window.Description = App;
