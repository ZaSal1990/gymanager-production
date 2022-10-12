import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginProvider from './providers/LoginProvider';
import axios from 'axios';

if (process.env.REACT_APP_API_BASE_URL) {	
	axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
	}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>
);


