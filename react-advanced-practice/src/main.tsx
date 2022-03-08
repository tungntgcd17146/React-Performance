import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RoomsProvider from './context/RoomContext';

ReactDOM.render(
  <React.StrictMode>
    <RoomsProvider>
      <App />
    </RoomsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
