var Project = ({project}) => (

  !project ? <div class="project-view">No project found</div> :

  <div className="project-view">

      <div className="show-project-item" src={`https://github.com/HRR22-Lyra/git-it-together`} allowFullScreen></div>

    </div>

    <div className="project-details">

      <h3>{project.snippet.title}</h3>

      <div>{project.snippet.description}</div>

    </div>


);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
Project.propTypes = {
  project: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Project = Project;