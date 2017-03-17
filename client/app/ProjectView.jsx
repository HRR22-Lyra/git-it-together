<<<<<<< HEAD
import React from 'react';

=======
>>>>>>> 572cf908ae0d53c747c6248542fa0cd7378a97ae
var Project = ({project}) => (
  !project ? <div class="project-view">No project found</div> :
  <div className="project-view">
      <div className="show-project-item" src={`https://github.com/HRR22-Lyra/git-it-together`} allowFullScreen></div>
    </div>
    //divs for repo properties
    <div className="project-details">
      <div className="repo-nav">{project.repohead}</div>
      <div className="repo-content">{project.repository-content}</div>
      <div>{project.description}</div>
    </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
Project.propTypes = {
  project: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
module.exports = Project;