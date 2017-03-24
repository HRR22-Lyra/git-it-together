import React from 'react';

var list = null;

var updateList = function() {
  list.getResources();
};

var Form = () => (
  <form className="form-inline">
    <label className="sr-only" htmlFor="resource-input-name">Resource Name</label>
    <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="resource-input-name" placeholder="Name" />
    <label className="sr-only" htmlFor="resource-input-url">Resource Url</label>
    <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="resource-input-url" placeholder="Url" />
    <button type="submit" className="btn btn-primary">Add</button>
  </form>
);

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: props.project, resources: null};

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
        <div>LOADING RESOURCES</div>
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
