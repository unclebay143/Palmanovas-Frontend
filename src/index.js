// React
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";

import App from './App';
import reportWebVitals from './reportWebVitals';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// Custom Styles
import './pages/pages-styles/common.css';
import './pages/pages-styles/home.css';
import './pages/pages-styles/login.css';
import './pages/pages-styles/signup.css';
import './pages/pages-styles/forgotpassword.css';
import './pages/pages-styles/about.css';

// Dashboard Styles
import './components/dashboard/dashboard-styles/sidebar.css';
import './components/dashboard/dashboard-styles/dashboard.css';
import './components/dashboard/dashboard-styles/user-profile.css';
import './components/dashboard/bonus/bonus.css';

// Tab Styles
import './components/dashboard/Layout/tab/tabs.css'

// Toastify Styles
import 'react-toastify/dist/ReactToastify.css';

// Redux Store
import store from './store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
