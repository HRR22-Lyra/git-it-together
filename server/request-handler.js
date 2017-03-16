var db = require('./db_config.js');

exports.addProject = function (req, res) {
  console.log('addProjects ran! Request:', req.body);
  res.end();
};
/*
req.body: {githubHandle: 'Example', repoName: 'example_repo}
res: {}
*/

exports.listProjects = function (req, res) {
  console.log('listProjects ran! Request:', req.body);
  res.end();
};

exports.addResource = function (req, res) {
  console.log('addResources ran! Request:', req.body);
  res.end();
};

exports.getProject = function (req, res) {
  console.log('getProject ran! Request:', req.body);
  res.end();
};
