import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import AuthService from '../config/AuthService';

const auth = new AuthService('X5MiErhjYO21MdTVoiLZccQA123jBgla', 'sdm.auth0.com');
console.log(auth);

(function() {
  axios.get('/api/projectList')
  .then(function (response) {
    console.log(response);
    ReactDOM.render(
      <App auth={auth} projects={response.data}/>, document.getElementById('app')
    );
  })
  .catch(function (error) {
    console.log(error);
  });
})();

$('#deliverables-section').scrollspy({ target: '#deliverables-nav' });
