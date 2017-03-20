/*****************************************************************/
/**************************** WARNING ****************************/
/*****************************************************************/
/**** THIS SCRIPT WILL DROP ALL TABLES IN THE HEROKU DATABASE ****/
/************ ONLY RUN IF YOU KNOW WHAT YOU ARE DOING ************/
/*****************************************************************/
/**************************** WARNING ****************************/
/*****************************************************************/
// Run this file with node db_seed.js

// Grab database and models
var db = require('./db.js');
var Project = db.models.Project;
var Resource = db.models.Resource;
var Deliverable = db.models.Deliverable;

// Seed data
var githubUrl = 'https://api.github.com/repos/';
var projectSeed = [
  {owner: 'HRR22-Lyra', get_repo: githubUrl + 'HRR22-Lyra/git-it-together'}
];
var resourceSeed = [
  {project_id: 1, user: 'mega_man', link: 'https://www.google.com/'},
  {project_id: 1, user: 'Tre', link: 'https://www.yahoo.com/'},
  {project_id: 1, user: 'w1nd0wz', link: 'https://www.bing.com/'}
];
var deliverableSeed = [
  {project_id: 1, owner: 'mega_man', status: 'DONE', due_date: 'today', progress: 'none', points: 5},
  {project_id: 1, owner: 'w1nd0wz', status: 'DONE', due_date: 'today', progress: 'none', points: 15},
  {project_id: 1, owner: 'mega_man', status: 'DONE', due_date: 'today', progress: 'none', points: 10},
  {project_id: 1, owner: 'Tre', status: 'DONE', due_date: 'today', progress: 'none', points: 5},
  {project_id: 1, owner: 'mega_man', status: 'DONE', due_date: 'today', progress: 'none', points: 5}
];

// Force sync to drop tables
db.sync({force: true})
.then(function() {
  projectSeed.forEach(function(data) {
    Project.create({
      owner: data.owner,
      get_repo: data.get_repo
    });
  });
}).then(function() {
  resourceSeed.forEach(function(data) {
    Resource.create({
      project_id: data.project_id,
      user: data.user,
      link: data.link
    });
  });
}).then(function() {
  deliverableSeed.forEach(function(data) {
    Deliverable.create({
      project_id: data.project_id,
      owner: data.owner,
      status: data.status,
      due_date: data.due_date,
      progress: data.progress,
      points: data.points
    });
  });
});
