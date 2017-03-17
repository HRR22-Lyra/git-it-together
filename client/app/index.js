import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import AuthService from '../config/AuthService';



const auth = new AuthService('X5MiErhjYO21MdTVoiLZccQA123jBgla', 'sdm.auth0.com');
console.log(auth);

<<<<<<< HEAD
ReactDOM.render(

  <App auth={auth}/>, document.getElementById('app')
=======
ReactDOM.render( <App />, document.getElementById('app')
>>>>>>> c53185e3c60f4fcf013713cbe890d02f8b9d5f3a


  );