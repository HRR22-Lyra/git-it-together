import React from 'react';

var list = null;

var Form = () => (
  <form className="form">
    <div className="col">
      <label className="sr-only" htmlFor="deliverable-input-task">Task</label>
      <input type="text" className="form-control" id="deliverable-input-task" placeholder="Task" />
    </div>
    <div className="col">
      <label className="sr-only" htmlFor="deliverable-input-assignment">Assigned To</label>
      <input type="text" className="form-control" id="deliverable-input-assignment" placeholder="Asignment" />
    </div>
    <div className="col inline">
      <label className="sr-only" htmlFor="deliverable-input-fibbonaci">Task Complexity</label>
      <select className="custom-select" id="deliverable-input-fibbonaci">
        <option>Complexity</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="8">8</option>
      </select>
    </div>
    <div className="col inline">
      <label className="sr-only" htmlFor="deliverable-input-status">Status</label>
      <select className="custom-select" id="deliverable-input-status">
        <option value="current">Current Tasks</option>
        <option value="backlog">Backlog</option>
        <option value="icebox">Icebox</option>
        <option value="complete">Completed Tasks</option>
      </select>
    </div>
    <div className="col inline">
      <button type="submit" className="btn btn-primary">Add</button>
    </div>
  </form>
);

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: props.project, deliverables: null};

    list = this;
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

exports.Form = Form;
exports.List = List;
