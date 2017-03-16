var db = require('./db_config.js');

exports.addProject = function (req, res) {
  console.log('addProjects ran! Request:', req.body);
  res.end();
};

exports.addResource = function (req, res) {
  console.log('addResources ran! Request:', req.body);
  res.end();
};

exports.getProject = function (res, res) {
  console.log('getProject ran! Request:', req.body);
  res.end();
};
