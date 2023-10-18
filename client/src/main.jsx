import React from 'react';  
import ReactDOM from 'react-dom/server';
import App from './App.jsx';
import './nav.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
