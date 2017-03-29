import React from 'react';
import Deliverable from './Deliverable.jsx';
import Resource from './Resource.jsx';
import ChatApp from './chatRoom.jsx';

var Project = ({project, profile, deleteProject}) => (


  !project ? <div className="project-view">No project found</div> :
  <div className="container-fluid">
    <div className="project-view">
      <div className="row">
        <div className="col project-details">
          <a className="repo-nav" target="_blank" href={'https://github.com/' + project.owner + '/' + project.name.replace(/ /g, '-').toLowerCase()}>{project.name}</a>
          <div className="deleteBar">
          <button type="submit" className="delete" onClick={() => deleteProject(project.id)}><i className="fa fa-trash"></i></button>
          </div>
          <hr />
          <p className="repo-content">{project.description}</p>
        </div>
      </div>
      <div className="row deliverables-row">
        <div className="col-xs-12 col-sm-12 col-lg-6 project-view-component project-view-component-left">
          <div className="deliverables-section">
            <h2>Deliverables</h2>
            <hr />
            <Deliverable.Form projectid={project.id} user={profile.nickname} room={project.name} />
            <hr />
            <div id="deliverables">
              <Deliverable.List project={project} />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-6 project-view-component project-view-component-right">
          <div className="resources-section">
            <h2>Resources</h2>
            <hr />
            <Resource.Form projectid={project.id} user={profile.nickname} room={project.name} />
            <hr />
            <div id="resources">
              <Resource.List project={project} />
            </div>
          </div>
        </div>
      </div>
      <div className="row chat-row">
        <div className="col-xs-12 col-sm-12 col-lg-6 project-view-component project-view-component-left">
          <div className="video-chat-section">
            <iframe src={"https://appear.in/git-it-together/" + project.name} width="100%" height="640" frameBorder="0"></iframe>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-6 project-view-component project-view-component-right">
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
