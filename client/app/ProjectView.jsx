import React from 'react';

var project = ({project}) => (


  !project ? <div class="project-view">No project found</div> :

  <div className="project-view">
      <div className="show-project-item" src={`https://github.com/HRR22-Lyra/git-it-together`} allowFullScreen></div>

    <div className="project-details">
      <div className="repo-nav">{project.repohead}</div>
      <div className="repo-content">{project.repository-content}</div>
      <div>{project.description}</div>
    </div>

    <div className="deliverables-section">
      <form class="form-inline">
        <label class="sr-only" for="deliverable-input-task">Task</label>
        <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="deliverable-input-task" placeholder="Task" />
        <label class="sr-only" for="deliverable-input-assignment">Assigned To</label>
        <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="deliverable-input-assignment" placeholder="Asignment" />
        <label class="sr-only" for="deliverable-input-status">Status</label>
        <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="deliverable-input-status">
          <option selected>Where...</option>
          <option value="current">Current Sprint</option>
          <option value="backlog">Backlog</option>
          <option value="icebox">Icebox</option>
          <option value="complete">Completed Sprints</option>
        </select>
        <button type="submit" class="btn btn-primary">Add</button>
      </form>

      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div className="panel panel-inverse">
          <div className="panel-heading" role="tab" id="headingOne">
            <h4 className="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h2>Current Sprint</h2>
              </a>
            </h4>
          </div>
          <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div className="panel-body">

            </div>
          </div>
        </div>
        <div className="panel panel-inverse">
          <div className="panel-heading" role="tab" id="headingTwo">
            <h4 className="panel-title">
              <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <div className="deliverables-section-header">
                  <h2>Backlog</h2>
                </div>
              </a>
            </h4>
          </div>
          <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div className="panel-body">

            </div>
          </div>
        </div>
        <div className="panel panel-inverse">
          <div className="panel-heading" role="tab" id="headingThree">
            <h4 className="panel-title">
              <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <div className="deliverables-section-header">
                  <h2>Icebox</h2>
                </div>
              </a>
            </h4>
          </div>
          <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            <div className="panel-body">

            </div>
          </div>
        </div>
        <div className="panel panel-inverse">
          <div className="panel-heading" role="tab" id="headingFour">
            <h4 className="panel-title">
              <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <div className="deliverables-section-header">
                  <h2>Completed Sprints</h2>
                </div>
              </a>
            </h4>
          </div>
          <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
            <div className="panel-body">

            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="resources-section">
      <form class="form-inline">
        <label class="sr-only" for="resource-input-name">Resource Name</label>
        <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="resource-input-name" placeholder="Name" />
        <label class="sr-only" for="resource-input-url">Resource Url</label>
        <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="resource-input-url" placeholder="Url" />
        <button type="submit" class="btn btn-primary">Add</button>
      </form>
    </div>

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
