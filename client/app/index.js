import searchGitHub from '../config/searchGitHub';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import AuthService from '../config/AuthService';


const auth = new AuthService('L02x425Vda4YLpr7ejSs63dUihl3lyxn', 'sdm.auth0.com');
console.log(auth);

ReactDOM.render(
  <App searchGitHub={searchGitHub} auth={auth}/>, document.getElementById('app')
  );