import React from 'react'


var getProjectList = ({key, query, max = 5}, callback) => {
  $.get('/api/projectlist', {
    id: 1,
    owner: string,
    get_repo: string,
    name: string,
    description: string,
    createdAt: integer,
    updatedAt: integer,
    type: ''
    updatedAt: integer

  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.log(err));
  });
};

//listProjects sample response:
//{ id: 1,
// owner: 'HRR22-Lyra',
// get_repo: 'https://api.github.com/repos/HRR22-Lyra/git-it-together',
// name: 'Git It Together',
// description: 'Greatest App of All Time',
// createdAt: 2017-03-17T00:01:37.433Z,
// updatedAt: 2017-03-17T00:01:37.433Z
//}

var postProject = ({key, query, max = 5}, callback) => {
  $.post('/api/project', {
    id: 1,
    owner: string,
    get_repo: string,
    name: string,
    description: string,
    createdAt: integer,
    updatedAt: integer
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.log(err));
  });
};

module.exports = searchGitHub;