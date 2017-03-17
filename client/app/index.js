import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import AuthService from '../config/AuthService';



const auth = new AuthService('X5MiErhjYO21MdTVoiLZccQA123jBgla', 'sdm.auth0.com');
console.log(auth);

ReactDOM.render(

  <App auth={auth}/>, document.getElementById('app')

  );