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

        return <div>
          <div className="searchBar"> <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search by repo name" />
          </div>
          <ProjectList projects={projects} handleProjectListEntryClick={this.handleProjectListEntryClick}></ProjectList>
          </div>
    }
});

module.exports = Search;
