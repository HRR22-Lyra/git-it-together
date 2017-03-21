var db = require('./db_config.js');
var http = require('http');
var request = require('request');

//---------------------------------------------------------------------------
// addProject Request Format: {githubHandle: 'handle, repoName: 'reponame'}
// addProject Reponse Format: 201 status only
  // if NOT a valid user will return string: status 400 / empty

exports.addProject = (req, res) => {
  var handle = req.body.githubHandle;
  var repo = req.body.repoName;
  var githubURL = 'https://api.github.com/repos/' + handle + '/' + repo;
  request({url: githubURL, headers:{'User-Agent': handle}}, function (err, response, body) {
    if (JSON.parse(response.statusCode) !== 404) {
      db.Project.create({owner: handle, get_repo: githubURL})
      .then( () => {
        res.status(201).send();
      });
    } else {
      console.log('Error: ', err)
      res.status(400).send();
    }
  });
};

//---------------------------------------------------------------------------
// listProjects Request Format: no request data needed
// listProjects Reponse Format:
// [{ id: 1, owner: 'HRR22-Lyra', get_repo: 'https://api.github.com/repos/HRR22-Lyra/git-it-together',
// name: 'Git It Together', description: 'Greatest App of All Time', createdAt: 2017-03-17T00:01:37.433Z,
// updatedAt: 2017-03-17T00:01:37.433Z }, { id: 2,
// owner: 'notvalid',
// get_repo: 'https://api.github.com/repos/notvalid/invalidUser',
// name: null,
// description: null,
// createdAt: 2017-03-17T17:15:49.954Z,
// updatedAt: 2017-03-17T17:15:49.954Z }
// ]

exports.listProjects = (req, res) => {
  db.Project.findAll()
    .then( (projects) => {
      projectData = [];
      projects.forEach((project) => {
        projectData.push(project.dataValues);
      })
      res.status(200).send(projectData);
    });
};

//---------------------------------------------------------------------------
// addResource Request Format: {projectID: 123, link: 'http://resourceLink.com', user: 'mega_man'}
// Note - 'user' should be the user's github handle
// addResource Response Format: 201 status only

exports.addResource = (req, res) => {
  var projectID = req.body.projectID;
  var link = req.body.link;
  var user = req.body.user;
  db.Resource.create({project_id: projectID, link: link, user: user})
    .then( (resources) => {
      var resourceData = resources.dataValues;
      res.status(201).send();
    });
  };

//---------------------------------------------------------------------------
// addDeliverable Request Format: {projectID: 123, user: 'mega_man', status: 'string', dueDate: 'string', progress: 'string', points: 5}
// Note - 'user' should be the user's github handle
// addDeliverable Response Format: 201 status only

exports.addDeliverable = (req, res) => {
  var projectID = req.body.projectID;
  var owner = req.body.user;
  var status = req.body.status;
  var dueDate = req.body.dueDate;
  var progress = req.body.progress;
  var points = req.body.points;
  db.Deliverable.create({project_id: projectID, owner: owner, status: status, due_date: dueDate, progress: progress, points: points})
    .then( (deliverables) => {
      var deliverableData = deliverables.dataValues;
      res.status(201).send(deliverableData);
    });
  };

//---------------------------------------------------------------------------
// fetchProject Request Format: {projectID: 123}
// fetchProject Request Fromat: if no project matches ID - status 404 and empty response
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
//   ]
// "deliverables": [
//     {
//       "id": 1,
//       "project_id": 1,
//       "owner": "mega_man",
//       "status": "DONE",
//       "due_date": "today",
//       "progress": "none",
//       "points": 5,
//       "createdAt": "2017-03-17T19:14:10.000Z",
//       "updatedAt": "2017-03-17T19:14:10.000Z"
//     },
//   ]
// }

exports.fetchProject = (req, res) => {
  var projectID = req.body.projectID;
  //Query database for project URL
  db.Project.findOne({ where: {id: projectID} })
    .then( (project) => {
    if (!project) {
      res.status(400).send();
    } else {
      var githubURL = project.get_repo;
      var handle = project.owner;
      var projectData = {};
      //Query gitHub for additional project info
      request({url: githubURL, headers:{'User-Agent': handle}}, (err, response, body) => {
        if (JSON.parse(response.statusCode) !== 404) {
          response = JSON.parse(response.body);
          projectData.name = response.name;
          projectData.description = response.description;
          projectData.owner = response.owner.login;
          projectData.repoUrl = response.url;
          projectData.ownerAvatar = response.owner.avatar_url;
          projectData.private = response.private;//boolean value
          // Query database for related resources
          db.Resource.findAll({project_id: projectID})
          .then( (resources) => {
            projectData.resources = [];
            resources.forEach( (resource) => {
              projectData.resources.push(resource.dataValues);
            })
            db.Deliverable.findAll({project_id: projectID})
            .then((deliverables) => {
              projectData.deliverables = [];
              deliverables.forEach( (deliverable) => {
                projectData.deliverables.push(deliverable.dataValues);
              });
              res.status(200).send(projectData);
            });
          });
        } else {
          console.log('Error: ', err)
          res.status(400).send();
        }
      });
    }
  });
};
