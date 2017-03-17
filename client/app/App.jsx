import React from 'react';

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
        <p>hi fam</p>
      </div>



      );
  }
}

//window.App = App;