// Resources http://beatscodeandlife.ghost.io/react-socket-io-part-i-real-time-chat-application/
// http://danialk.github.io/blog/2013/06/16/reactjs-and-socket-dot-io-chat-application/
import React from 'react';
// import Socket from 'socket.io';

var socket = io.connect();

//Get room/project name from project view
var room = "Project Name (room name)";

var Message = React.createClass({
  render() {
    return (
      <div className="message">
        <strong>{this.props.user} :</strong>
        <span>{this.props.text}</span>
      </div>
    );
  }
});

var MessageList = React.createClass({
  render() {
    return (
      <div className='messages'>
        <h2> Discussion: </h2>
        {
          this.props.messages.map((message, i) => {
            return (
              <Message
                key={i}
                user={message.user}
                text={message.text}
              />
            );
          })
        }
      </div>
    );
  }
});

var MessageForm = React.createClass({

  getInitialState() {
    return {text: ''};
  },

  handleSubmit(e) {
    e.preventDefault();
    var message = {
      user : this.props.user,
      text : this.state.text,
      project: room
    }
    this.props.onMessageSubmit(message);
    this.setState({ text: '' });
  },

  changeHandler(e) {
    this.setState({ text : e.target.value });
  },

  render() {
    return(
      <div className='message_form'>
        <h3>Join the conversation:</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.changeHandler}
            value={this.state.text}
          />
        </form>
      </div>
    );
  }
});


var ChatApp = React.createClass({

  getInitialState() {
    return {users: [], messages:[], text: ''};
  },

  componentDidMount() {
    socket.on('init', this._initialize);
    socket.on('message', this._messageRecieve);
    socket.on('connect', function() {
       socket.emit('room', room);
    });
  },

  _initialize(data) {
    var {users, name} = data;
    this.setState({users, user: name});
  },

  _messageRecieve(message) {
    var {messages} = this.state;
    messages.push(message);
    this.setState({messages});
  },

  handleMessageSubmit(message) {
    var {messages} = this.state;
    messages.push(message);
    this.setState({messages});
    socket.emit('message', message);
  },

  render() {
    return (
      <div>
        <MessageList
          messages={this.state.messages}
        />
        <MessageForm
          onMessageSubmit={this.handleMessageSubmit}
          user={this.state.user}
        />
      </div>
    );
  }
});

// React.render(<ChatApp/>, document.getElementById('app'));