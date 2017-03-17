import searchGitHub from '../config/searchGitHub';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(
  <App searchGitHub={searchGitHub} />, document.getElementById('app')
  );