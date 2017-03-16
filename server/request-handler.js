//RESOURCES: http://stackoverflow.com/questions/7967037/how-to-make-external-http-requests-with-node-js

var db = require('./db_config.js');
var http = require('http');

exports.addProject = function (req, res) {
  console.log('addProjects ran! Request:', req.body);
  //https://api.github.com/repos/HRR22-Lyra/git-it-together
  //var handle = req.body.githubHandle;
  //var repo = req.body.repoName;
  //var path = '/repos/' + handle + 'repo';
  //var options = {
    //host: 'api.github.com'
    //path: path;
  //}
  res.end();
};
/*
req.body: {githubHandle: 'Example', repoName: 'example_repo}
if error - res: {exists: false} < -- trigger message to try again
if success - res: {exists: true}  < -- trigger refresh
*/

exports.listProjects = function (req, res) {
  console.log('listProjects ran! Request:', req.body);
  res.end();

/*
req.body: {githubHandle: 'Example', repoName: 'example_repo}
if error - res: {exists: false} < -- trigger message to try again
if success - res: {exists: true}  < -- trigger refresh
*/
};

exports.addResource = function (req, res) {
  console.log('addResources ran! Request:', req.body);
  res.end();
};

exports.getProject = function (req, res) {
  console.log('getProject ran! Request:', req.body);
  res.end();
};
