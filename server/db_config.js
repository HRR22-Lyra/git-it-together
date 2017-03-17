var Sequelize = require('sequelize');

//connect to Heroku PostGres Database
var db = new Sequelize("postgres://xhzrrvvawqzqov:1c2ac54a72b223e5d603ce03d8195194ac39336f544c04b266758f083aea4a15@ec2-23-23-228-115.compute-1.amazonaws.com:5432/d5lfn726hf4pp6?ssl=true", {"dialect":"postgres", "ssl":true, "dialectOptions":{"ssl":{"require":true}}});

var Project = db.define('Project', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  owner: Sequelize.STRING,
  get_repo: Sequelize.STRING,
  name: Sequelize.STRING,
  description: Sequelize.STRING
});

var Resource = db.define('Resource', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  project_id: Sequelize.INTEGER,
  user: Sequelize.STRING,
  link: Sequelize.STRING
});

Resource.belongsTo(Project, {foreignKey: 'project_id'});

var Deliverable = db.define('Deliverable', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  project_id: Sequelize.INTEGER,
  owner: Sequelize.STRING,
  status: Sequelize.STRING,
  due_date: Sequelize.STRING,
  progress: Sequelize.STRING,
  points: Sequelize.INTEGER
});

Deliverable.belongsTo(Project, {foreignKey: 'project_id'});

// var User = db.define('User', {
//   id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
//   github_handle: Sequelize.STRING
// });

db.sync();
//can add force:true to drop tables before recreating them

module.exports.Project = Project;
module.exports.Deliverable = Deliverable;
// module.exports.User = User;
module.exports.Resource = Resource;