import React from 'react';
import projectList from '.ProjectList.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], currentProject: null }
  }

  handleProjectListEntryClick(project) {
    this.setState({ currentProject: project})
  }

  getGitHubProjects(query) {

    var options = {
      key: '',
      query: query
    };

    this.props.searchGitHub()
  }
  render() {
    return (
      <div>
        <p>git it together fam</p>
      </div>



      );
  }
}

module.exports = App;