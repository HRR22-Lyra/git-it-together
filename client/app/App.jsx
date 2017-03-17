import React from 'react';
import Login from './Login.jsx';
import AuthService from '../config/AuthService.js'
import ProfileEntryView from './ProfileEntryView.jsx'
import {Button} from 'react-bootstrap'
import Nav from './Nav.jsx';
import ProjectList from './ProjectList.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { projects: this.props.projects, currentProject: null, profile: props.auth.getProfile() }

    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
    props.auth.on('logged_out', (bye) => {
      this.setState({profile: this.props.auth.getProfile()})
      //this.render();
    })

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

    return (
      <div>
        <Nav />
        <p>git it together fam</p>

        <ProfileEntryView profile={profile}></ProfileEntryView>

        <Button onClick={this.logout.bind(this)}>Logout</Button>



        <div className="col-md-3"></div>
        <div className="col-md-6">
          {/* <ProjectList projects={this.state.projects} handleProjectListEntryClick={this._handleProjectListEntryClick.bind(this)} /> */}
        </div>
        <div className="col-md-3"></div>
      </div>




      );}
  }
}

module.exports = App;