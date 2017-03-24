import React from 'react';
import Deliverable from './Deliverable.jsx';
import Resources from './Resource.jsx';
import ChatApp from './chatRoom.jsx';

var Project = ({project, profile}) => (


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
            <Deliverable.Form />
            <hr />
            <Deliverable.List project={project} />
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
            <Resources project={project} />
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
