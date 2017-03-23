import React from 'react';

class Deliverables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: props.project, deliverables: null};

    this.getDeliverables(this.state.project);
  }

  getDeliverables(project) {
    var context = this;
    axios.get('/api/deliverables?id=' + project.id)
    .then(function(response) {
      context.state.deliverables = {};
      var deliverables = context.state.deliverables;
      deliverables.currTask = [];
      deliverables.backlog = [];
      deliverables.ready = [];
      deliverables.icebox = [];
      deliverables.done = [];
      response.data.forEach(function(deliverable) {
        if (deliverable.status === 'Done') {
          deliverables.done.push(deliverable);
        } else if (deliverable.status === 'Backlog') {
          deliverables.backlog.push(deliverable);
        } else if (deliverable.status === 'Ready') {
          deliverables.ready.push(deliverable);
        } else if (deliverable.status === 'In Progress') {
          deliverables.currTask.push(deliverable);
        }
      });
      context.forceUpdate();
    });
  }

  render() {
    if (this.state.deliverables === null) {
      return (
        <div>LOADING DELIVERABLES</div>
      );
    } else {
      return (
        <div id="deliverables">
          <div className="deliverables-section-header">
            <h3 id="current">Current Tasks</h3>
          </div>
          <div className="deliverables-section-body">
            {this.state.deliverables.currTask.map((deliverable) =>
              <Deliverable deliverable={deliverable} />
            )}
          </div>
          <hr />
          <div className="deliverables-section-header">
            <h3 id="backlog">Backlog</h3>
          </div>
          <div className="deliverables-section-body">
            {this.state.deliverables.backlog.map((deliverable) =>
              <Deliverable deliverable={deliverable} />
            )}
          </div>
          <hr />
          <div className="deliverables-section-header">
            <h3 id="icebox">Icebox</h3>
          </div>
          <div className="deliverables-section-body">
            {this.state.deliverables.icebox.map((deliverable) =>
              <Deliverable deliverable={deliverable} />
            )}
          </div>
          <hr />
          <div className="deliverables-section-header">
            <h3 id="completed">Completed Tasks</h3>
          </div>
          <hr />
          <div className="deliverables-section-body">
            {this.state.deliverables.done.map((deliverable) =>
              <Deliverable deliverable={deliverable} />
            )}
          </div>
        </div>
      );
    }
  }
}

var Deliverable = ({deliverable}) => (
  <div className="deliverable">
    {deliverable.id} | {deliverable.owner} | {deliverable.name} | {deliverable.status} | {deliverable.points}
  </div>
);

module.exports = Deliverables;
