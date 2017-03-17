import React from 'react';
import express from '../server/routes.js';

var ProjectList = ({project, handleProjectListEntryClick}) => (
  <div className="project-list">

    {projects.app.get('/api/projectList').map((project) =>
      <ProjectListEntry
        key={}
        project={project}
      handleProjectListEntryClick={handleProjectListEntryClick} />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
ProjectList.propTypes = {
  projects: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
module.exports = ProjectList;



