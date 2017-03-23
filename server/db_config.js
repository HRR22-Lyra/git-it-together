var db = require('./db.js');

db.sync();
//can add force:true to drop tables before recreating them

module.exports.Project = db.models.Project;
module.exports.Deliverable = db.models.Deliverable;
module.exports.UserProjects = db.models.UserProjects;
module.exports.Resource = db.models.Resource;
module.exports.Message = db.models.Message;

