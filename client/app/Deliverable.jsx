import React from 'react';
var socket = io.connect('/io/deliverables');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: props.projectid, task: null, owner: null, points: null, status: 'current'}
  }

  componentDidMount() {
    socket.emit('room', this.props.room);
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post('/api/deliverables', {
      projectID: this.state.id,
      task: this.state.task,
      owner: this.state.owner,
      points: this.state.points,
      status: this.state.status
    }).then(function(response) {
      socket.emit('change', 'post');
    });

    this.setState({task: null, owner: null, points: null, status: 'current'});
    document.getElementById('deliverableForm').reset();
  }

  render() {
    return (
      <form id="deliverableForm" className="form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="col">
          <label className="sr-only" htmlFor="deliverable-input-task">Task</label>
          <input type="text" className="form-control" id="deliverable-input-task" placeholder="Task"
            onChange={(event) => this.setState({task: event.target.value})} />
        </div>
        <div className="col">
          <label className="sr-only" htmlFor="deliverable-input-assignment">Assigned To</label>
          <input type="text" className="form-control" id="deliverable-input-assignment" placeholder="Asignment"
            onChange={(event) => this.setState({owner: event.target.value})} />
        </div>
        <div className="col inline">
          <label className="sr-only" htmlFor="deliverable-input-fibbonaci">Task Complexity</label>
          <select className="custom-select" id="deliverable-input-fibbonaci"
            onChange={(event) => this.setState({points: event.target.value})}>
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
          <select className="custom-select" id="deliverable-input-status"
            onChange={(event) => this.setState({status: event.target.value})}>
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
  };
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: props.project, deliverables: null};

    this.getDeliverables();
  }

  componentDidMount() {
    socket.on('reload', this.getDeliverables.bind(this));
  }

  getDeliverables() {
    var context = this;
    var project = this.state.project;
    axios.get('/api/deliverables?id=' + project.id)
    .then(function(response) {
      context.state.deliverables = {};
      var deliverables = context.state.deliverables;
      deliverables.current = [];
      deliverables.backlog = [];
      deliverables.icebox = [];
      deliverables.complete = [];
      response.data.forEach(function(deliverable) {
        if (deliverable.status === 'complete') {
          deliverables.complete.push(deliverable);
        } else if (deliverable.status === 'backlog') {
          deliverables.backlog.push(deliverable);
        } else if (deliverable.status === 'icebox') {
          deliverables.icebox.push(deliverable);
        } else if (deliverable.status === 'current') {
          deliverables.current.push(deliverable);
        }
      });
      context.forceUpdate();
    });
  }

  deleteDeliverable(deliverableID) {
    axios.delete('/api/deliverables?id=' + deliverableID)
    .then(function(response) {
      socket.emit('change', 'delete');
    });
  }

  render() {
    if (this.state.deliverables === null) {
      return (
        <div><i className="fa fa-spinner fa-pulse fa-5x fa-fw"></i></div>
      );
    } else {
      return (
        <div id="deliverables">
          <div className="deliverables-section-header">
            <h3 id="current">Current Tasks</h3>
          </div>
          <div className="deliverables-section-body">
            {this.state.deliverables.current.map((deliverable) =>
              <Deliverable deliverable={deliverable} deleteDeliverable={this.deleteDeliverable.bind(this)} />
            )}
          </div>
          <hr />
          <div className="deliverables-section-header">
            <h3 id="backlog">Backlog</h3>
          </div>
          <div className="deliverables-section-body">
            {this.state.deliverables.backlog.map((deliverable) =>
              <Deliverable deliverable={deliverable} deleteDeliverable={this.deleteDeliverable.bind(this)} />
            )}
          </div>
          <hr />
          <div className="deliverables-section-header">
            <h3 id="icebox">Icebox</h3>
          </div>
          <div className="deliverables-section-body">
            {this.state.deliverables.icebox.map((deliverable) =>
              <Deliverable deliverable={deliverable} deleteDeliverable={this.deleteDeliverable.bind(this)} />
            )}
          </div>
          <hr />
          <div className="deliverables-section-header">
            <h3 id="completed">Completed Tasks</h3>
          </div>
          <hr />
          <div className="deliverables-section-body">
            {this.state.deliverables.complete.map((deliverable) =>
              <Deliverable deliverable={deliverable} deleteDeliverable={this.deleteDeliverable.bind(this)} />
            )}
          </div>
        </div>
      );
    }
  }
}

var Deliverable = ({deliverable, deleteDeliverable}) => (
  <div className="deliverable">
    ID: {deliverable.id} | {deliverable.owner} | {deliverable.task} | {deliverable.points} |
    <i className="fa fa-times right" aria-hidden="true" onClick={() => deleteDeliverable(deliverable.id)}></i>
  </div>
);

exports.Form = Form;
exports.List = List;
