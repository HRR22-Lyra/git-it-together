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

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
ProjectListEntry.propTypes = {
  project: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
module.exports = ProjectListEntry;