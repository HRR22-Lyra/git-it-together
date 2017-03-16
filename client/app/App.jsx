class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], currentProject: null }
  }

  handleProjectListEntryClick(project) {
    this.setState({ currentProject: project})
  }
  render() {
    return (
      <div>
      </div>



      );
  }
}

window.App = App;