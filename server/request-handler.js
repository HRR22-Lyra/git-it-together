//RESOURCES: http://stackoverflow.com/questions/7967037/how-to-make-external-http-requests-with-node-js

var db = require('./db_config.js');
var http = require('http');
var request = require('request');

exports.addProject = function (req, res) {
  console.log('addProjects ran! Request:', req.body);
  var handle = req.body.githubHandle;
  var repo = req.body.repoName;
  var githubURL = 'https://api.github.com/repos/' + handle + '/' + repo;
  request({url: githubURL, headers:{'User-Agent': handle}}, function (err, res, body) {
    if (!err) {
      db.Project.create({owner: handle, get_repo: githubURL})
      .then(function() {
        console.log(db.Project.findAll({ where: {owner: handle} }));
      });
    } else {
      console.log('Error: ', err)
    }
  });
  res.end();
};

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
