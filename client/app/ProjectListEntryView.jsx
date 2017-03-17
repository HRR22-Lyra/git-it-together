import React from 'react';

var ProjectListEntry = ({project, handleProjectListEntryClick}) => (
  <div className="project-list-entry">
    <div className="project-body">
      <div className="row">
        <div className="col-md-1">
          <div className="project-list-entry-title">Project Title</div>
          <div className="project-list-entry-detail">Project Description</div>
        </div>
        <div className="col-md-2">
          <span className="right glyphicon glyphicon-chevron-right"></span>
        </div>
      </div>
    </div>
  </div>
);

ProjectListEntry.propTypes = {
  project: React.PropTypes.object.isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
module.exports = ProjectListEntry;
=======
window.ProjectListEntry = ProjectListEntry;
>>>>>>> Add more styles and delete unnecessary space in ProjectView
=======
window.ProjectListEntry = ProjectListEntry;
>>>>>>> 572cf908ae0d53c747c6248542fa0cd7378a97ae
