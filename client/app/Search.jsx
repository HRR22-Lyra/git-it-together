// Resources: http://jsfiddle.net/martinaglv/3N6D3/

import React from 'react';
import ProjectList from './ProjectList.jsx';

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
                <div className="col">
                  <h1>Projects</h1>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="searchBar"> <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search by repo name" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Enter repo handle to add project..." />
                  <span className="input-group-btn">
                    <a className="btn btn-default" type="button" href="#"><i class="fa fa-plus"></i></a>
                  </span>
                </div>
              </div>
                <div className="row">
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
