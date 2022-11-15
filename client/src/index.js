import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Landing } from './components/landing/Landing';
import About from './components/about/About';
import Services from './components/services/Services';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import { ToastContainer } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/auth/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/auth/Register';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
