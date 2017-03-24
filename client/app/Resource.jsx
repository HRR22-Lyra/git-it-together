import React from 'react';

var list = null;

var updateList = function() {
  list.getResources();
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: props.projectid, user: props.user, name: '', url: ''};
  }

  handleSubmit(event) {
    event.preventDefault();

    var context = this;
    axios.post('/api/resources', {
      projectID: this.state.id,
      name: this.state.name,
      link: this.state.url,
      user: this.state.user
    }).then(function(response) {
      updateList();
    });

    this.setState({name: '', url: ''});
    document.getElementById('resourceForm').reset();
  }

  render() {
    return (
      <form id="resourceForm" className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
        <label className="sr-only" htmlFor="resource-input-name">Resource Name</label>
        <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="resource-input-name" placeholder="Name"
          onChange={(event) => this.setState({name: event.target.value})} />
        <label className="sr-only" htmlFor="resource-input-url">Resource Url</label>
        <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="resource-input-url" placeholder="Url"
          onChange={(event) => this.setState({url: event.target.value})} />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    );
  }
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: props.project, resources: null};

    list = this;
    this.getResources();
  }

  getResources() {
    var context = this;
    var project = this.state.project;
    axios.get('/api/resources?id=' + project.id)
    .then(function(response) {
      context.state.resources = response.data;
      context.forceUpdate();
    });
  }

  render() {
    if (this.state.resources === null) {
      return (
        <div><i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i></div>
      );
    } else {
      return (
        <div className="resources-section-body">
          {this.state.resources.map((resource) =>
            <Resource resource={resource} />
          )}
        </div>
      );
    }
  }
};

var Resource = ({resource}) => (
  <div className = "resource">
    {resource.user}: <a className="right" href={resource.link}>{resource.link}</a>
  </div>
);

exports.Form = Form;
exports.List = List;
