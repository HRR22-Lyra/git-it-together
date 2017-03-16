var ProjectList = ({projects, handleProjectListEntryClick}) => (
  <div className="video-list media">

    {projects.map((video) =>
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
window.ProjectList = ProjectList;

