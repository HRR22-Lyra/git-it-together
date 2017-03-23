import React from 'react';

//To render in app: <UserRepos handlerepoClick={this.handleRepoClick}></Search>
//also import this

var UserRepos = React.createClass({


    getRepos() {
      axios.post('/api/listRepos', {username: JSON.parse(localStorage.profile).nickname})
      .then(function (response) {
         this.setState({allRepos: response.data})
      }.bind(this));
    },

    componentDidMount() {
      this.getRepos();
    },

    getInitialState: function(){
        return { searchString: ''};
    },


    handleChange: function(e){
        this.setState({searchString:e.target.value});
    },

    render: function() {
        var repos = [];
        var searchString = this.state.searchString.trim().toLowerCase();

        if(searchString.length > 0){
            repos = this.state.allRepos.filter(function(repo){
                return repo.toLowerCase().match( searchString );
            });
        }

        return <div className="repoList">
            <div className="repo-list-entry">
            <div className="searchBar">
            <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search your GitHub repos and click add to projects..." />
            </div>
              {repos.map((repo, index) =>
                  <div className="repoName" onClick={() => handleRepoClick(repo)}> {repo} </div>
              )}
            </div>
          </div>
    }
});

module.exports = UserRepos;
