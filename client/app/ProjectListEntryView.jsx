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


module.exports = ProjectListEntry;
