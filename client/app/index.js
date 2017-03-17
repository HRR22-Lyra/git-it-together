//var searchGitHub = require('../config/searchGitHub');
import searchGitHub from '../config/searchGitHub';
//var React = require('react');
import React from 'react';
//var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';
//var App = require('./App.jsx');
import App from './App.jsx';

ReactDOM.render(
  <App searchGitHub={searchGitHub} />, document.getElementById('app')
  );