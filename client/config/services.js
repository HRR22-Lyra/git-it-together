import React from 'react'
import $ from 'jquery';
import { EventEmitter } from 'events';

var getPros = function(input, callback, callback2) {
  $.post('/api/listProjects', input)
  .done( function(items) {
    console.log('got items', items);
    callback2(items);
    callback(items);
      //this.emit('list_updated', items)  //return items;
  });
};
var addProject = function(newProject, callback) {
  $.post('/api/addProject', newProject)
  .done( function(resp) {
    console.log('post response', resp);
    if (callback) {
      callback();
    }
  })
};

var deleteProject = function(project, callback) {
  $.ajax({
    url: '/api/projectList',
    type: 'DELETE',
    success: function(result) {
      console.log('response status: ');
      callback();
    }
  });
}



// var projectID = req.body.projectID;
//   var link = req.body.link;
//   var user = req.body.user;


export default class repoService extends EventEmitter {
  constructor() {
    super()
    //localStorage.removeItem('projects');

    const profile = localStorage.getItem('profile');
    this.userHandle = profile ? JSON.parse(localStorage.profile).nickname : {}
    console.log('profile fromserv', this.userHandle);
    //localStorage.setItem('projects', JSON.stringify([]))

    //this.pList = getPros(this.makeit.bind(this));
  }

  listUserProjects () {
    var username = JSON.parse(localStorage.profile).nickname
    getPros({username: username}, this.makeit.bind(this), this.setProjects.bind(this))
  }

  addUserProject(newProjectName) {
    var username = JSON.parse(localStorage.profile).nickname
    var newProjectObj ={githubHandle: username, repoName: newProjectName}
    console.log('input', newProjectObj);
    addProject(newProjectObj, this.listUserProjects.bind(this));
  }

  deleteUserProject(projectId) {
    var username = JSON.parse(localStorage.profile).nickname;
    var projectObject = {username: username, projectID: projectId};
    deleteProject(projectObject, this.listUserProjects.bind(this));

  }

  setProjects(projects){
    // Saves profile data to localStorage
    localStorage.setItem('projects', JSON.stringify(projects))
    // Triggers profile_updated event to update the UI
  }

  getProjects() {
    const projects = localStorage.getItem('projects')
    var test = projects ? JSON.parse(localStorage.projects) : [];
    //console.log('test', test)
    return projects ? JSON.parse(localStorage.projects) : []
  }

  makeit(items) {
    //console.log('gotpassed', items);
    this.emit('list_updated', items);  //return items;
  }

  hasBeenAdded() {
    console.log('HELLO')
    this.emit('has_been_added');
  }
}





//   }
//   this.getProjectList: function({key, query, max = 5}, callback) {
//     return $.get('/api/projectlist', {
//       //maxResults: max,
//     })
//     .done(({items}) => {
//       console.log('got items', items);
//       if (callback) {
//         callback(items);
//         //return items;
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.log(err));
//     });
//   },
// }

// module.exports = {
//   getProjectList: function({key, query, max = 5}, callback) {
//    $.get('/api/projectlist', {
//       //maxResults: max,
//     })
//     .done( function(items) {
//       console.log('got items', items);
//       if (callback) {
//         this.emit('list_updated', items)

//         callback(items);
//         //return items;
//       }
//     })
//     // .fail(({responseJSON}) => {
//     //   responseJSON.error.errors.forEach((err) =>
//     //     console.log(err));
//     // });
//   },
//   addProject: function(newProject, callback) {
//     return $.post('/api/project', newProject)
//     .done( function(resp) {
//       if (callback) {
//         callback(items);
//       }
//     })
//     // .fail(({responseJSON}) => {
//     //   responseJSON.error.errors.forEach((err) =>
//     //   console.log(err));
//     // });
//   }
// };


// $.post('/api/project', {
//     id: 1,
//     owner: string,
//     get_repo: string,
//     name: string,
//     description: string,
//     createdAt: integer,
//     updatedAt: integer
//   })
//   .done(({items}) => {
//     if (callback) {
//       callback(items);
//     }
//   })
//   .fail(({responseJSON}) => {
//     responseJSON.error.errors.forEach((err) =>
//       console.log(err));
//   });
// };


// addProject Request Format: {githubHandle: 'handle, repoName: 'reponame'}
// addProject Reponse Format: 201 status only
  // if NOT a valid user will return string: status 400 / empty
