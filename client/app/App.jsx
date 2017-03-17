import React from 'react';
import Nav from './Nav.jsx';
import ProjectList from './ProjectList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], currentProject: null }
  }

  handleProjectListEntryClick(project) {
    this.setState({ currentProject: project})
  }

  getGitHubProjects(query) {
    //responsible for grabbing projects
    var options = {
      key: '',
      query: query
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <p>git it together fam</p>
        <div className="col-md-3"></div>
        <div className="col-md-6">
          {/* <ProjectList projects={this.state.projects} handleProjectListEntryClick={this._handleProjectListEntryClick.bind(this)} /> */}
        </div>
        <div className="col-md-3"></div>
      </div>



      );
  }
}

module.exports = App;