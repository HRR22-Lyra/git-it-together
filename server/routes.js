var requestHandler = require('./request-handler.js');
var express = require('express');

module.exports = function (app, express) {
  app.post('/api/projectList', requestHandler.addProject);
  app.post('/api/resources', requestHandler.addResource);
  app.get('/api/project', requestHandler.getProject);
};
