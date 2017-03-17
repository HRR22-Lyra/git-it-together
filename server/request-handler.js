var db = require('./db_config.js');
var http = require('http');
var request = require('request');

// expected request format: {githubHandle: 'handle, repoName: 'reponame'} ----------------
exports.addProject = function (req, res) {
  var handle = req.body.githubHandle;
  var repo = req.body.repoName;
  var githubURL = 'https://api.github.com/repos/' + handle + '/' + repo;
  request({url: githubURL, headers:{'User-Agent': handle}}, function (err, response, body) {
    if (!err) {
      db.Project.create({owner: handle, get_repo: githubURL})
      .then(function() {
        res.status(201).send();
      });
    } else {
      console.log('Error: ', err)
    }
  });
};

// no request body needed for listProjects -----------------------------------------------
exports.listProjects = function (req, res) {
  console.log('listProjects ran! Request:', req.body);
  db.Project.findAll()
    .then(function(projects) {
      var projectData = projects[0].dataValues;
      res.status(200).send(projectData);
    });
};
//listProjects sample response:
  //{ id: 1,
  // owner: 'HRR22-Lyra',
  // get_repo: 'https://api.github.com/repos/HRR22-Lyra/git-it-together',
  // name: 'Git It Together',
  // description: 'Greatest App of All Time',
  // createdAt: 2017-03-17T00:01:37.433Z,
  // updatedAt: 2017-03-17T00:01:37.433Z }

// Sample request body for addResource: {projectID: 123, link: 'http://resourceLink.com',
// user: [or leave off for now]}
exports.addResource = function (req, res) {
  var projectID = req.body.projectID;
  var link = req.body.link;
  var user = req.body.user || '';
  db.Resource.create({project_id: projectID, link: link, user: user})
    .then(function(resources) {
      var resourceData = resources.dataValues;
      res.status(201).send();
    });
  };

// Sample request body for getProject: {projectID: 123} -------------------------------------------------
exports.fetchProject = function (req, res) {
  db.Project.findOne({ where: {id: req.body.projectID} })
    .then(function(project) {
    var githubURL = project.get_repo;
    var handle = project.owner;
    request({url: githubURL, headers:{'User-Agent': handle}}, function (err, response, body) {
      if (!err) {
        var projectData = {};
        projectData.
        console.log('git hub response: ', response);
        console.log('')
      } else {
        console.log('Error: ', err)
      }
    });
  });
};
//Sample response object from getProject:
//{ { id: 9,
  //project_id: null,
  //link: null,
  //user: '',
  //updatedAt: 2017-03-17T02:19:35.031Z,
  //createdAt: 2017-03-17T02:19:35.031Z }
//}