var ProjectListEntry = ({project, handleProjectListEntryClick}) => (
  <div className="project-list-entry">

    <div className="media-left media-middle">

      <img className="project-object" src={project.snippet.thumbnails.default.url} alt="" />

    </div>

    <div className="project-body">

      <div className="project-list-entry-title" onClick={() => handleProjectListEntryClick(project)} >{project.title}</div>

      <div className="project-list-entry-detail">{project.description}</div>

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
window.ProjectListEntry = ProjectListEntry;