import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Poppins-Black.ttf';
import './fonts/Poppins-Bold.ttf';
import './fonts/Poppins-Medium.ttf';
import './fonts/Poppins-Thin.ttf';
import './fonts/Poppins-Italic.ttf';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
