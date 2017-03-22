var requestHandler = require('./request-handler.js');
var express = require('express');

module.exports = function (app, express) {
  app.post('/api/addProject', requestHandler.addProject);
  app.post('/api/listProjects', requestHandler.listProjects);
  app.post('/api/resources', requestHandler.addResource);
  app.post('/api/project', requestHandler.fetchProject);
  app.post('/api/deliverables', requestHandler.addDeliverable);
};
