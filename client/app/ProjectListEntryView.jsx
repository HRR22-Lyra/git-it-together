var ProjectListEntry = ({project, handleProjectListEntryClick}) => (
  <div class="project-list-entry">
    <div class="project-body">
      <div class="row">
        <div class="col-md-1">
          <div class="project-list-entry-title">Project Title</div>
          <div class="project-list-entry-detail">Project Description</div>
        </div>
        <div class="col-md-2">
          <span class="right glyphicon glyphicon-chevron-right"></span>
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
window.ProjectListEntry = ProjectListEntry;