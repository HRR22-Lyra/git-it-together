var db = require('./db_config.js');
var http = require('http');
var request = require('request');

//---------------------------------------------------------------------------
// addProject Request Format: {githubHandle: 'handle, repoName: 'reponame'}
// addProject Reponse Format: 201 status only

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

//---------------------------------------------------------------------------
// listProjects Request Format: no request data needed
// listProjects Reponse Format:
// { id: 1, owner: 'HRR22-Lyra', get_repo: 'https://api.github.com/repos/HRR22-Lyra/git-it-together',
// name: 'Git It Together', description: 'Greatest App of All Time', createdAt: 2017-03-17T00:01:37.433Z,
// updatedAt: 2017-03-17T00:01:37.433Z }

exports.listProjects = function (req, res) {
  console.log('listProjects ran! Request:', req.body);
  db.Project.findAll()
    .then(function(projects) {
      var projectData = projects[0].dataValues;
      res.status(200).send(projectData);
    });
};

//---------------------------------------------------------------------------
// addResource Request Format: {projectID: 123, link: 'http://resourceLink.com', user: 'mega_man'}
// Note - 'user' should be the user's github handle
// addResource Response Format: 201 status only

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

//---------------------------------------------------------------------------
// fetchProject Request Format: {projectID: 123}
// fetchProject Response Format: { name: 'git-it-together',
// description: 'Git it Together consolidates the tools you need to implement agile scrum on existing Git Hub repositories.',
// owner: 'HRR22-Lyra',
// repoUrl: 'https://api.github.com/repos/HRR22-Lyra/git-it-together',
// ownerAvatar: 'https://avatars2.githubusercontent.com/u/26446426?v=3',
// private: false,
// resources:
//  [ { id: 1,
//      project_id: 1,
//      user: '',
//      link: 'http://www.google.com',
//      createdAt: 2017-03-17T13:46:52.259Z,
//      updatedAt: 2017-03-17T13:46:52.259Z },
//    { id: 2,
//      project_id: 1,
//      user: '',
//      link: 'http://bing.com',
//      createdAt: 2017-03-17T13:53:30.809Z,
//      updatedAt: 2017-03-17T13:53:30.809Z },
//   ] }

exports.fetchProject = function (req, res) {
  var projectID = req.body.projectID;
  db.Project.findOne({ where: {id: projectID} })
    .then(function(project) {
    var githubURL = project.get_repo;
    var handle = project.owner;
    var projectData = {};
    console.log('URL ---> ', githubURL, 'Handle ---->', handle)
    request({url: githubURL, headers:{'User-Agent': handle}}, function (err, response, body) {
      if (!err) {
        response = JSON.parse(response.body);
        projectData.name = response.name;
        projectData.description = response.description;
        projectData.owner = response.owner.login;
        projectData.repoUrl = response.url;
        projectData.ownerAvatar = response.owner.avatar_url;
        projectData.private = response.private //boolean value
        db.Resource.findAll({project_id: projectID})
        .then(function(resources) {
          projectData.resources = [];
          resources.forEach(function (resource) {
            projectData.resources.push(resource.dataValues)
          })
          res.status(200).send(projectData);
        });
      } else {
        console.log('Error: ', err)
      }
    });
  });
};
