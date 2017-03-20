var db = require('./db.js');

db.sync();
//can add force:true to drop tables before recreating them

module.exports.Project = db.models.Project;
module.exports.Deliverable = db.models.Deliverable;
// module.exports.User = User;
module.exports.Resource = db.models.Resource;
