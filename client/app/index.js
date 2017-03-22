import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import AuthService from '../config/AuthService';
import services from '../config/services.js';
import repoService from '../config/services';

console.log('service', repoService);

const auth = new AuthService('X5MiErhjYO21MdTVoiLZccQA123jBgla', 'sdm.auth0.com');
console.log(auth);
const repod = new repoService();
console.log(repod);

(function() {
  var repos = null;
  axios.post('/api/listRepos', {username: JSON.parse(localStorage.profile).nickname})
  .then((response) => {
    repos = response.body
  })
  .then ( () => {
    axios.post('/api/listProjects', {username: 'lmegviar'})
    .then(function (response) {
      ReactDOM.render(
        <App auth={auth} projects={response.data} repos={repos}/>, document.getElementById('app')
      );
    })

  })
  .catch(function (error) {
    console.log(error);
  });
})();

// ReactDOM.render(
//       <App auth={auth} repod={repod}/>, document.getElementById('app')
//     );



