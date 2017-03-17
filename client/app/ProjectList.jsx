import React from 'react';
import ProjectListEntry from './ProjectListEntryView.jsx';

var ProjectList = ({projects, handleProjectListEntryClick}) => (

  <div className="project-list">

    {projects.map((project) =>
      <ProjectListEntry
        key = {project.id}
        project = {project}
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



