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
var UserProjects = db.models.UserProjects;

// Seed data
var githubUrl = 'https://api.github.com/repos/';
var projectSeed = [
  {id: 10034501, owner: 'HRR22-Lyra', name: 'Git It Together', description: 'Project management organized around git repos',  createdAt: "2017-03-21T00:54:00.011Z", updatedAt: "2017-03-21T00:54:00.011Z",  get_repo: githubUrl + 'HRR22-Lyra/git-it-together'},
];
var resourceSeed = [
  {project_id: 10034501, user: 'mega_man', link: 'https://www.google.com/'},
  {project_id: 10034501, user: 'Tre', link: 'https://www.yahoo.com/'},
  {project_id: 10034501, user: 'w1nd0wz', link: 'https://www.bing.com/'}
];
var deliverableSeed = [
  {project_id: 10034501, owner: 'mega_man', name: 'I am a deliverable', status: 'Done', due_date: 'Tomorrow', progress: 'none', points: 5},
  {project_id: 10034501, owner: 'w1nd0wz', name: 'I am a deliverable', status: 'Done', due_date: 'Today', progress: 'none', points: 15},
  {project_id: 10034501, owner: 'mega_man', name: 'I am a deliverable', status: 'In Progress', due_date: null, progress: 'none', points: 10},
  {project_id: 10034501, owner: 'Tre', name: 'I am a deliverable', status: 'Ready', due_date: '2024', progress: 'none', points: 5},
  {project_id: 10034501, owner: 'mega_man', name: 'I am a deliverable', status: 'Backlog', due_date: null, progress: 'none', points: 5}
];
var userProjectsSeed = [
  {id: 12442141, user: 'lmegviar', project_id: 10034501},
  {id: 12442142, user: 'Jimmy6strings', project_id: 10034501},
  {id: 12442143, user: 'JStubb7939', project_id: 10034501},
  {id: 12442144, user: 'Riski24', project_id: 10034501},
  {id: 12442145, user: 'sdemoor', project_id: 10034501}
];

// Force sync to drop tables
db.sync({force: true})
.then(function() {
  Project.bulkCreate(projectSeed);
}).then(function() {
  Resource.bulkCreate(resourceSeed);
}).then(function() {
  UserProjects.bulkCreate(userProjectsSeed);
}).then(function() {
  Deliverable.bulkCreate(deliverableSeed);
});
