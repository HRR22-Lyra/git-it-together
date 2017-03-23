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

        return  <div className="input-group">
            <input type="text" className="form-control" id="searchg-repo" value={this.state.searchString} onChange={this.handleChange} placeholder="Search your repos to add a project" />
              {repos.map((repo, index) =>
                  <div className="repoNamebar" onClick={() => {this.props.handleRepoClick(repo)}}><p className="repoName"> {repo} </p></div>
              )}
            </div>
    }
});

module.exports = UserRepos;
