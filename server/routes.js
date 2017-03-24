var requestHandler = require('./request-handler.js');
var express = require('express');

module.exports = function (app, express) {
  app.post('/api/addProject', requestHandler.addProject);
  app.post('/api/listProjects', requestHandler.listProjects);
  app.post('/api/resources', requestHandler.addResource);
  app.delete('/api/resource', requestHandler.deleteResource);
  app.get('/api/resources', requestHandler.listResources);
  app.post('/api/project', requestHandler.fetchProject);
  app.post('/api/deliverables', requestHandler.addDeliverable);
  app.get('/api/deliverables', requestHandler.listDeliverables);
  app.post('/api/listRepos', requestHandler.listRepos);
  app.delete('/api/projectList', requestHandler.deleteUserProject)
};
