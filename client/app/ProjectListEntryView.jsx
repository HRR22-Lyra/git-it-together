import React from 'react';
import ProjectList from './ProjectList.jsx';


var ProjectListEntry = ({project, handleProjectListEntryClick}) => (
  <div className="project-list-entry">
    <div className="project-body">
      <div className="row">
        <div className="col-md-1">
          <div className="project-list-entry-title" onClick={() =>
            handleProjectListEntryClick(project)}>{project.name}</div>
          <div className="project-list-entry-owner">{project.owner}</div>
          <div className="project-list-entry-detail">{project.description}</div>
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

//listProjects sample response:
//{ id: 1,
// owner: 'HRR22-Lyra',
// get_repo: 'https://api.github.com/repos/HRR22-Lyra/git-it-together',
// name: 'Git It Together',
// description: 'Greatest App of All Time',
// createdAt: 2017-03-17T00:01:37.433Z,
// updatedAt: 2017-03-17T00:01:37.433Z
//}