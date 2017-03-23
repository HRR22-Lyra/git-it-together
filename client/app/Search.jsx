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
            <div className="project-list-header">
              <div className="row">
                <div className="col">
                  <h1>Projects</h1>
                  <hr />
                </div>
              </div>
              <div className="row search-add-repo">
                <div className="col">
                    <form className="form">
                      <div className="input-group">
                        <input type="text" value={this.state.searchString} onChange={this.handleChange}  className="form-control" id="searchg-repo" placeholder="Search by repo name" />
                      </div>
                    </form>
                </div>
                <div className="col">
                    <form className="form-inline">
                       <UserRepos />
                    </form>
                </div>
              </div>
              <div className="project-list">
                <div className="col">
                  <ProjectList projects={projects} handleProjectListEntryClick={this.props.handleProjectListEntryClick}></ProjectList>
                </div>
              </div>
            </div>
        </div>
        );
    }
});

module.exports = Search;
