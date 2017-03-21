// Resources http://beatscodeandlife.ghost.io/react-socket-io-part-i-real-time-chat-application/
// http://danialk.github.io/blog/2013/06/16/reactjs-and-socket-dot-io-chat-application/

// Insert into outer componenet to render:   <ChatApp user={this.state.profile.nickname} room={this.state.currentProject}></ChatApp>

//TO DO: Set limit on number of messages to display

import React from 'react';
// import Socket from 'socket.io';

var socket = io.connect();
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
        {
          this.props.messages.map((message, i) => {
            return (
              <Message
                key={i}
                user={message.user}
                text={message.text}
                room={message.room}
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
      room: this.props.room
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
        <h3>Chat about {this.props.room}</h3>
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
    return {messages:[], text: ''};
  },

  componentDidMount() {
    socket.on('init', this._initialize);
    socket.on('message', this._messageRecieve);
    socket.on('connect', function() {
       socket.emit('room', this.props.room);
    });
  },

  _messageRecieve(message) {
    var {messages} = this.state;
    messages.unshift(message);
    this.setState({messages});
  },

  handleMessageSubmit(message) {
    var {messages} = this.state;
    messages.unshift(message);
    this.setState({messages});
    socket.emit('message', message);
  },

  render() {
    return (
      <div>
        <MessageForm
          onMessageSubmit={this.handleMessageSubmit}
          user={this.props.user}
          room={this.props.room}
        />
        <MessageList
          messages={this.state.messages}
        />
      </div>
    );
  }
});

module.exports = ChatApp;
// React.render(<ChatApp/>, document.getElementById('app'));