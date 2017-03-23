// Resources http://beatscodeandlife.ghost.io/react-socket-io-part-i-real-time-chat-application/
// http://danialk.github.io/blog/2013/06/16/reactjs-and-socket-dot-io-chat-application/

// Insert into outer componenet to render:   <ChatApp user={this.state.profile.nickname} room={this.state.}></ChatApp>

//TO DO: Set limit on number of messages to display

import React from 'react';
var socket = io.connect();

var Message = React.createClass({
  render() {
    return (
      <div className="message">
        <strong>{this.props.user}: </strong>
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
        <h2>Chat about {this.props.room}</h2>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Add to the conversation!'
            onChange={this.changeHandler}
            value={this.state.text}
            className="form-control mb-2 mr-sm-2 mb-sm-0"
          />
        </form>
        <hr />
      </div>
    );
  }
});

// Main component:
var ChatApp = React.createClass({

  getInitialState() {
    return {messages:[{
      user : "Welcome",
      text : "Git the conversation started.",
      room: this.props.room
    }], text: ''};
  },

  componentDidMount() {
    socket.on('init', this._initialize);
    socket.on('message', this._messageRecieve);
    socket.emit('room', this.props.room);
  },

  _messageRecieve(message) {
    var {messages} = this.state;
    messages.unshift(message);
    this.setState({messages});
  },

  handleMessageSubmit(message) {
    var {messages} = this.state;
    // messages.push(message);
    this.setState({messages});
    socket.emit('message', message);
  },

  render() {
    return (
      <div>
        <h3>Chat about {this.props.room}</h3>
        <MessageList
          messages={this.state.messages}
        />
        <MessageForm
          onMessageSubmit={this.handleMessageSubmit}
          user={this.props.user}
          room={this.props.room}
        />
      </div>
    );
  }
});

module.exports = ChatApp;
