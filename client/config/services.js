import React from 'react'
import $ from 'jquery';




module.exports = {
  getProjectList: function({key, query, max = 5}, callback) {
    return $.get('/api/projectlist', {
      maxResults: max,
    })
    .done(({items}) => {
      console.log('got items', items);
      if (callback) {
        callback(items);
        //return items;
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.log(err));
    });
  },

  addProject: function(newProject, callback) {
    return $.post('/api/project', newProject)
    .done( function(resp) {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
      console.log(err));
    });
  }
};

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
  }
}

// addProject Request Format: {githubHandle: 'handle, repoName: 'reponame'}
// addProject Reponse Format: 201 status only
  // if NOT a valid user will return string: status 400 / empty