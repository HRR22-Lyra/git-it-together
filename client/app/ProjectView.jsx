import React from 'react';
import Deliverable from './Deliverable.jsx';
import ChatApp from './chatRoom.jsx';

var Project = ({project, profile, deleteProject}) => (


  !project ? <div className="project-view">No project found</div> :
  <div className="container-fluid">
    <div className="project-view">
      <div className="row">
        <div className="col project-details">
          <h1 className="repo-nav">{project.name}</h1>
          <hr />
          <h5 className="repo-content">{project.description}</h5>
        </div>
      </div>
      <div className="row deliverables-row">
        <div className="col">
          <div className="deliverables-section">
            <h2>Deliverables</h2>
            <hr />
            <form className="form">
              <div className="col">
                <label className="sr-only" htmlFor="deliverable-input-task">Task</label>
                <input type="text" className="form-control" id="deliverable-input-task" placeholder="Task" />
              </div>
              <div className="col">
                <label className="sr-only" htmlFor="deliverable-input-assignment">Assigned To</label>
                <input type="text" className="form-control" id="deliverable-input-assignment" placeholder="Asignment" />
              </div>
              <div className="col inline">
                <label className="sr-only" htmlFor="deliverable-input-fibbonaci">Task Complexity</label>
                <select className="custom-select" id="deliverable-input-fibbonaci">
                  <option>Complexity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="8">8</option>
                </select>
              </div>
              <div className="col inline">
                <label className="sr-only" htmlFor="deliverable-input-status">Status</label>
                <select className="custom-select" id="deliverable-input-status">
                  <option value="current">Current Tasks</option>
                  <option value="backlog">Backlog</option>
                  <option value="icebox">Icebox</option>
                  <option value="complete">Completed Tasks</option>
                </select>
              </div>
              <div className="col inline">
                <button type="submit" className="btn btn-primary">Add</button>
              </div>
            </form>
            <hr />
            <div id="deliverables">
              <div className="deliverables-section-header">
                <h3 id="current">Current Tasks</h3>
              </div>
              <div className="deliverables-section-body">
                {project.currSprint.map((deliverable) =>
                  <Deliverable deliverable={deliverable} />
                )}
              </div>
              <hr />
              <div className="deliverables-section-header">
                <h3 id="backlog">Backlog</h3>
              </div>
              <div className="deliverables-section-body">
                {project.backlog.map((deliverable) =>
                  <Deliverable deliverable={deliverable} />
                )}
              </div>
              <hr />
              <div className="deliverables-section-header">
                <h3 id="icebox">Icebox</h3>
              </div>
              <div className="deliverables-section-body">
                {project.icebox.map((deliverable) =>
                  <Deliverable deliverable={deliverable} />
                )}
              </div>
              <hr />
              <div className="deliverables-section-header">
                <h3 id="completed">Completed Tasks</h3>
              </div>
              <hr />
              <div className="deliverables-section-body">
                {project.done.map((deliverable) =>
                  <Deliverable deliverable={deliverable} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="resources-section">
            <h2>Resources</h2>
            <hr />
            <form className="form-inline">
              <label className="sr-only" htmlFor="resource-input-name">Resource Name</label>
              <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="resource-input-name" placeholder="Name" />
              <label className="sr-only" htmlFor="resource-input-url">Resource Url</label>
              <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="resource-input-url" placeholder="Url" />
              <button type="submit" className="btn btn-primary">Add</button>
            </form>
            <hr />
          </div>
        </div>
      </div>
      <div className="row deliverables-row">
        <div className="col">
          <div className="video-chat-section">
            <iframe src={"https://appear.in/git-it-together/" + project.name} width="100%" height="640" frameborder="0"></iframe>
          </div>
        </div>
        <div className="col">
          <div className="chat-section">
            <ChatApp user={profile.nickname} room={project.name} />
          </div>
        </div>
          <div class="btn btn-primary">
          <button type="submit" onClick={() => deleteProject(project.id)}>Delete Project</button>
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
