import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// Favicon ekleme
const link = document.createElement('link');
link.rel = 'icon';
link.href = require('./images/logo.png'); // Logo dosya yolunu doğru ayarlayın
document.head.appendChild(link);