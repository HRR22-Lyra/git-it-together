class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], currentProject: null }
  }

  handleProjectListEntryClick(project) {
    this.setState({ currentProject: project})
  }

  getGitHubProjects(query) {

    var options = {
      key: //
      query: query
    };

    this.props.searchGitHub()
  }
  render() {
    return (
      <div>
      </div>



      );
  }
}

window.App = App;