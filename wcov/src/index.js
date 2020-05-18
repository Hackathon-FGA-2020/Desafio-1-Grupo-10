import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Firebase, { FireContext } from './components/Firebase'

ReactDOM.render(
  <FireContext.Provider value={Firebase()}>
    <App />
  </FireContext.Provider>,
  document.getElementById('root')

);
