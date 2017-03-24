// Resources: http://jsfiddle.net/martinaglv/3N6D3/

import React from 'react';
import ProjectList from './ProjectList.jsx';
import UserRepos from './UserRepos.jsx';

//To render in app: <Search projects={this.state.projects} handleProjectListEntryClick={this.handleProjectListEntryClick}></Search>

var Search = React.createClass({

    getInitialState: function(){
        return { searchString: '' };
    },

    handleChange: function(e){
        this.setState({searchString:e.target.value});
    },

    render: function() {
        var projects = this.props.projects,
            searchString = this.state.searchString.trim().toLowerCase();

        if(searchString.length > 0){
            projects = projects.filter(function(project){
                return project.name.toLowerCase().match( searchString );
            });
        }

        return (
          <div className="container-fluid">
            <div className="project-list">
                  <div className="row">
                    <div className="col project-list-header">
                      <h1>Projects</h1>
                      <hr />
                      <div className="project-list-search">
                        <div className="row">
                        <div className="col">
                          <form className="form search-repo">
                              <input type="text" value={this.state.searchString} onChange={this.handleChange}  className="form-control" id="search-repo" placeholder="Search your project list" />
                          </form>
                        </div>
                        <div className="col">
                          <form className="form-inline search-repo">
                              <UserRepos handleRepoClick={this.props.handleRepoClick.bind(this)}/>
                          </form>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
              {/* DO NOT change this to className. I don't know why but this is just the way it has to be... */}
              <div class="row">
                <div className="projects-section">
                  <div className="col">
                    <ProjectList projects={projects} handleProjectListEntryClick={this.props.handleProjectListEntryClick}></ProjectList>
                  </div>

                </div>
              </div>
            </div>
        </div>
        );
    }
});

module.exports = Search;
