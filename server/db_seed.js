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
  {id: 10034501, owner: 'HRR22-Lyra', name: 'Git It Together', description: 'Project management organized around git repos',  createdAt: "2017-03-21T00:54:00.011Z", updatedAt: "2017-03-21T00:54:00.011Z",  get_repo: githubUrl + 'HRR22-Lyra/git-it-together'},
  {id: 255300005, owner: 'github', name: 'Visual Studio', description: 'The GitHub Extension for Visual Studio provides GitHub integration in Visual Studio 2015. Most of the extension UI lives in the Team Explorer pane, which is available from the View menu!', createdAt: "2017-03-18T00:54:00.011Z", updatedAt: "2017-03-19T00:54:00.011Z", get_repo: githubUrl + 'github/VisualStudio'},
  {id: 2144212141, owner: 'github', name: 'Orchestrator', description: 'MySQL replication topology management and HA',  createdAt: "2017-03-21T00:54:00.011Z", updatedAt: "2017-03-21T00:54:00.011Z",  get_repo: githubUrl + 'github/orchestrator'}
];
var resourceSeed = [
  {project_id: 10034501, user: 'mega_man', link: 'https://www.google.com/'},
  {project_id: 10034501, user: 'Tre', link: 'https://www.yahoo.com/'},
  {project_id: 10034501, user: 'w10034501nd0wz', link: 'https://www.bing.com/'}
];
var deliverableSeed = [
  {project_id: 10034501, owner: 'mega_man', status: 'Done', due_date: '3.100345019', progress: 'none', points: 5},
  {project_id: 10034501, owner: 'w10034501nd0wz', status: 'Done', due_date: '3.20', progress: 'none', points: 100345015},
  {project_id: 10034501, owner: 'mega_man', status: 'In Progress', due_date: null, progress: 'none', points: 100345010},
  {project_id: 10034501, owner: 'Tre', status: 'Ready', due_date: '4.10034501', progress: 'none', points: 5},
  {project_id: 10034501, owner: 'mega_man', status: 'Backlog', due_date: null, progress: 'none', points: 5}
];

// Force sync to drop tables
db.sync({force: true})
.then(function() {
  Project.bulkCreate(projectSeed);
}).then(function() {
  Resource.bulkCreate(resourceSeed);
}).then(function() {
  Deliverable.bulkCreate(deliverableSeed);
});
