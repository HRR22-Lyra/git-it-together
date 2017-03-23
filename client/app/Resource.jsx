import React from 'react';

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: props.project, resources: null};

    this.getResources(this.state.project);
  }

  getResources(project) {
    var context = this;
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

module.exports = Resources;
