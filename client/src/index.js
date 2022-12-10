import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullNavbar from './components/navbar/FullNavbar';


const fakeUserData = {
  id: '123',
  name: 'john',
  password: '123',
  email: 'john@mail.com'
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
