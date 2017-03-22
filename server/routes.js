var requestHandler = require('./request-handler.js');
var express = require('express');

module.exports = function (app, express) {
  app.post('/api/addProject', requestHandler.addProject);
  app.post('/api/listProjects', requestHandler.listProjects);
  app.post('/api/resources', requestHandler.addResource);
  app.post('/api/project', requestHandler.fetchProject);
  app.post('/api/deliverables', requestHandler.addDeliverable);
<<<<<<< HEAD
  app.post('/api/listRepos', requestHandler.listRepos);
=======
  app.get('/api/deliverables', requestHandler.listDeliverables);
>>>>>>> Pull in deliverables from database before rerendering the project view
};
