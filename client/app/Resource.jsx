import React from 'react';
var socket = io.connect('/io/resources');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: props.projectid, user: props.user, name: null, url: null};
  }

  componentDidMount() {
    socket.emit('room', this.props.room);
  }

  handleSubmit(event) {
    event.preventDefault();


    if (this.state.name && this.state.url) {
      axios.post('/api/resources', {
        projectID: this.state.id,
        name: this.state.name,
        link: this.state.url,
        user: this.state.user
      }).then(function(response) {
        socket.emit('change', 'post');
      });

      this.setState({name: null, url: null});
      document.getElementById('resourceForm').reset();
      $('#resourceForm').css('border', 'none');
    } else {
      $('#resourceForm').css('border', '2px solid red');
    }
  }

  render() {
    return (
      <form id="resourceForm" className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
        <div className="col-12">
          <label className="sr-only" htmlFor="resource-input-name">Resource Name</label>
          <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="resource-input-name" placeholder="Name"
            onChange={(event) => this.setState({name: event.target.value})} />
        </div>
        <div className="col-12">
          <label className="sr-only" htmlFor="resource-input-url">Resource Url</label>
          <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="resource-input-url" placeholder="Url"
            onChange={(event) => this.setState({url: event.target.value})} />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    );
  }
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: props.project, resources: null};

    this.getResources();
  }

  componentDidMount() {
    socket.on('reload', this.getResources.bind(this));
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

  deleteResource(resourceID) {
    axios.delete('/api/resources?id=' + resourceID)
    .then(function(response) {
      socket.emit('change', 'delete');
    });
  }

  render() {
    if (this.state.resources === null) {
      return (
        <div><i className="fa fa-spinner fa-pulse fa-5x fa-fw"></i></div>
      );
    } else {
      return (
        <div className="resources-section-body">
          {this.state.resources.map((resource) =>
            <Resource resource={resource} deleteResource={this.deleteResource.bind(this)} />
          )}
        </div>
      );
    }
  }
};

var Resource = ({resource, deleteResource}) => (
  <div className = "resource">
    <i className="fa fa-external-link"></i>
    {resource.user}:
    <a className="resourceName" target="_blank" href={resource.link}>{resource.name}</a>
    <i className="fa fa-times deleteResource" aria-hidden="true" onClick={() => deleteResource(resource.id)}></i>
  </div>
);

exports.Form = Form;
exports.List = List;
