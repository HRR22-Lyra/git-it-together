import React from 'react';
import Login from './Login.jsx';
import AuthService from '../config/AuthService.js'
import Nav from './Nav.jsx';
import ProjectList from './ProjectList.jsx';
import Project from './ProjectView.jsx';
import Search from './Search.jsx';
import ChatApp from './chatRoom.jsx';

import repoService from '../config/services';
import About from './About.jsx';
import Description from './Description.jsx';




export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { projects: props.repod.getProjects(), currentProject: null, profile: props.auth.getProfile() }

    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
      props.repod.listUserProjects();
      //this.repod = new repoService();
    })
    props.repod.on('list_updated', (items) => {
      this.setState({projects: items})//.bind(this)
      //this.addNewProject('assignment_jq_ee_sprint');
      //console.log('projects:', this.state.projects)
    })

    props.auth.on('logged_out', (bye) => {
      this.setState({profile: this.props.auth.getProfile()})
      //this.render();
    })

  }

  refreshProjectList() { //bind this to button if we want a refresh button,
    this.props.repod.listUserProjects();
  }

  addNewProject(newProjectName) { // assign this to add project click event with the repo name as newProjectName argument
    this.props.repod.addUserProject(newProjectName);
  }

  deleteProject(projectID) {
    this.props.repod.deleteUserProject(projectID);
    this.setState({currentProject: null})
    console.log(projectID)//JAMES: pass this down to project view and bind it to the button which deletes a project, with project id as argument which you can get from current project i am pretty sure.
  }

  handleProjectListEntryClick(project) {
    if (project !== null) {
      this.state.currentProject = project;
      this.forceUpdate();
    } else {
      this.setState({currentProject: project});
    }
  }

  getGitHubProjects(query) {

    var options = {
      key: '',
      query: query
    };

    this.props.searchGitHub()
  }
  logout(){
    this.props.auth.logout()//add props.auth.on('logged-out') event which should be triggered in authservice.js which refreshes page. and same for logged in or authenticated events rather than the use of routes in authservice and here.
    //this.context.router.push('/login');//
  }

  render() {
    const { profile } = this.state
    const { auth } = this.props
    //const requireAuth = (nextState, replace) => {
      if (!auth.loggedIn()) {
       //replace({ pathname: '/login' })
       return (
        <div>
          <Login auth={auth}/>
        </div>
        )
      // }
     } else {
      if (this.state.currentProject === null) {

        return (
          <div>
            <Nav profile={profile} logout={this.logout.bind(this)} handleProjectListEntryClick={this.handleProjectListEntryClick.bind(this)} current="" />

            <About />
            <Description />


            <Search projects={this.state.projects} handleProjectListEntryClick={this.handleProjectListEntryClick.bind(this)} handleRepoClick={this.addNewProject.bind(this)} />
          </div>
        );
      } else {
        return (

          <div>
            <Nav profile={profile} logout={this.logout.bind(this)} handleProjectListEntryClick={this.handleProjectListEntryClick.bind(this)} />
            <Project project={this.state.currentProject} profile={this.state.profile} deleteProject={this.deleteProject.bind(this)}/>
          </div>
        );
      }
    }
  }
}

module.exports = App;
