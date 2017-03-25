var db = require('./db_config.js');
var http = require('http');
var request = require('request');

//---------------------------------------------------------------------------
// addProject Request Format: {githubHandle: 'handle, repoName: 'reponame'}
// addProject Reponse Format: 201 status only
  // if NOT a valid repo will return string: status 400 / empty

exports.addProject = (req, res) => {

  var handle = req.body.githubHandle;
  //save username in case user is not the owner of parent repo
  var user = req.body.githubHandle;
  var repo = req.body.repoName;
  var gitHubApi = 'https://api.github.com/repos/';
  var githubURL =  gitHubApi + handle + '/' + repo;

  request({url: githubURL, headers:{'User-Agent': handle}}, function (err, response, body) {
    var body = JSON.parse(response.body);
    //Make sure the requested repo is valie.
    if (JSON.parse(response.statusCode) !== 404) {
      //Check to see if repo was forked from another source. If so, add forked repo.
      if (body.hasOwnProperty("parent")) {
        githubURL = gitHubApi + body.parent.full_name;
        handle = body.parent.owner.login;
      }
      var name = body.name;
      var description = body.description;
      var projectID = null;
      //Check if repo already exists in database.
      db.Project.findOne({where: {get_repo: githubURL}})
      .then( (project) => {
        if (project) {
          projectID = project.dataValues.id;
        //If repo does not exist, add it.
        } else {
          db.Project.create({get_repo: githubURL, owner: handle, name: name, description: description})
          .then ( (project) => {
            projectID = project.dataValues.id;
          });
        }
        db.UserProjects.findOne({where: {user: user, project_id: projectID}})
        .then( (project) => {
          if (!project) {
            //Add association between project and current user
            db.UserProjects.create({user: user, project_id: projectID})
            .then ( (userProjects) => {
            });
           }
          res.status(201).send();
        });
      });
    } else {
      console.log('Error: ', err)
      res.status(400).send();
    }
  });
};

//---------------------------------------------------------------------------
// listProjects Request Format: {username: 'git_handle'}
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
  //Only find projects that belong to user.
  var user = req.body.username;
  var projectData = [];
  //Find all projects associated with user.
  db.UserProjects.findAll({where: {user: user} })
  .then( (projects) => {
    //Iterate over projects associated with user.
      projects.forEach((project, index) => {
      var id = project.dataValues.project_id;
      //Get details on all projects associated with user.
      db.Project.findOne({where: {id: id}})
      .then ((project) => {
        if(project) {
          projectData.push(project.dataValues);
        //Send project data once all projects have been added
        }
        if (index === projects.length - 1) {
          res.status(200).send(projectData);
        }
      });
    })
  })
};

//---------------------------------------------------------------------------
// addResource Request Format: {projectID: 123, link: 'http://resourceLink.com', user: 'mega_man'}
// Note - 'user' should be the user's github handle
// addResource Response Format: 201 status only

exports.addResource = (req, res) => {
  var projectID = req.body.projectID;
  var link = req.body.link;
  var name = req.body.name;
  var user = req.body.user;
  if (!name) {
    name = link;
  }
  db.Resource.create({project_id: projectID, link: link, name: name, user: user})
  .then( (resources) => {
    var resourceData = resources.dataValues;
    res.status(201).send();
  });
};

exports.deleteResource = (req, res) => {
  db.Resource.destroy({where: {id: req.query.id}})
  .then((numRows) => {
    res.status(200).send();
  });
};

exports.listResources = (req, res) => {
  db.Resource.findAll({where: {project_id: req.query.id}, raw: true})
  .then((resources) => {
    res.status(200).send(resources);
  });
};

//---------------------------------------------------------------------------
// addDeliverable Request Format: {projectID: 123, user: 'mega_man', name: 'string', status: 'string', dueDate: 'string', progress: 'string', points: 5}
// Note - 'user' should be the user's github handle
// addDeliverable Response Format: 201 status only

exports.addDeliverable = (req, res) => {
  var projectID = req.body.projectID;
  var owner = req.body.owner;
  var task = req.body.task;
  var status = req.body.status;
  var dueDate = req.body.dueDate;
  var progress = req.body.progress;
  var points = req.body.points;
  db.Deliverable.create({project_id: projectID, owner: owner, task: task, status: status, due_date: dueDate, progress: progress, points: points})
  .then( (deliverables) => {
    var deliverableData = deliverables.dataValues;
    res.status(201).send(deliverableData);
  });
};

exports.deleteDeliverable = (req, res) => {
  db.Deliverable.destroy({where: {id: req.query.id}})
  .then((numRows) => {
    res.status(200).send();
  });
};

exports.listDeliverables = (req, res) => {
  db.Deliverable.findAll({where: {project_id: req.query.id}, raw: true})
    .then((deliverables) => {
      res.status(200).send(deliverables);
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
  //Query database for project URL + username
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

//---------------------------------------------------------------------------
// listRepos input format: {username: 'github_handle}
// Example response: [ 'algo-time-complexity-review', 'git-it-together', 'recursion-prompts',]

exports.listRepos = (req, res) => {
  var user = req.body.username;
  var githubURL = 'https://api.github.com/users/' + user + '/repos';
  request({url: githubURL, headers:{'User-Agent': user}}, (err, response, body) => {
    //Github has request rate limit of 60 reqs per hours per IP - this conditional checks to see if the rate was exceeded ('https://developer.github.com/v3/#rate-limiting')
    if (JSON.parse(response.body).hasOwnProperty('message')) {
      res.status(439).send(['GitHub is overwhelmed! Please try again later.'])
    }
    if (JSON.parse(response.statusCode) !== 404) {
      var repos = [];
      JSON.parse(response.body).forEach( (repo) => {
        repos.push(repo.name);
      })
      res.status(200).send(repos);
    } else {
        console.log('Error: ', err)
        res.status(400).send();
      }
  });
};

//---------------------------------------------------------------------------
// Note: deleteUserProject only deletes the user's association with a project, not the project itself
// deleteUserProject input format: {username: 'github_handle, projectID: 1234}
// Example response: response code 204 for successful deletion
exports.deleteUserProject = (req, res) => {
  user = req.body.username;
  project = req.body.projectID;
  db.UserProjects.findOne({where: {user: user, project_id: project}})
  .then( (project) => {
    if (project) {
      project.destroy()
    }
  })
    .then( () => {
      res.status(204).send();
    })
};

//---------------------------------------------------------------------------
// saveMessage input format: {user 'github_handle, text: 'message text', room: 'projectName', createdAt: 'MMMM Do YYYY h:mm'}
exports.saveMessage = (message) => {
  db.Message.create(message)
  .then (() => {
  })
}
//---------------------------------------------------------------------------
// getMessages input format: 'roomName'
exports.getMessages = (room) => {
  return db.Message.findAll({where: {room: room}})
  .then ((messages) => {
    var savedMessages = [];
    messages.forEach((message) => {
      savedMessages.unshift(returnMessage = {
        user: message.user,
        text: message.text,
        room: message.room,
        createdAt: message.createdAt
      });
    })
    return savedMessages;
  })
}