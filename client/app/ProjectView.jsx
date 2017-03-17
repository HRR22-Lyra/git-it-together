import React from 'react';

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

    // the deliverables-section is a bootstrap accordion http://getbootstrap.com/javascript/#collapse-example-accordion
    <div className="deliverables-section">
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="panel panel-inverse">
          <div class="panel-heading" role="tab" id="headingOne">
            <h4 class="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <h2>Current Sprint</h2>
              </a>
            </h4>
          </div>
          <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div class="panel-body">
            </div>
          </div>
        </div>
        <div class="panel panel-inverse">
          <div class="panel-heading" role="tab" id="headingTwo">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <div class="deliverables-section-header">
                  <h2>Backlog</h2>
                </div>
              </a>
            </h4>
          </div>
          <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div class="panel-body">
            </div>
          </div>
        </div>
        <div class="panel panel-inverse">
          <div class="panel-heading" role="tab" id="headingThree">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <div class="deliverables-section-header">
                  <h2>Icebox</h2>
                </div>
              </a>
            </h4>
          </div>
          <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            <div class="panel-body">
            </div>
          </div>
        </div>
        <div class="panel panel-inverse">
          <div class="panel-heading" role="tab" id="headingFour">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseFour">
                <div class="deliverables-section-header">
                  <h2>Completed Sprints</h2>
                </div>
              </a>
            </h4>
          </div>
          <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
            <div class="panel-body">
            </div>
          </div>
        </div>
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


