// Resources http://beatscodeandlife.ghost.io/react-socket-io-part-i-real-time-chat-application/
// http://danialk.github.io/blog/2013/06/16/reactjs-and-socket-dot-io-chat-application/

// Insert into outer componenet to render:   <ChatApp user={this.state.profile.nickname} room={this.state.}></ChatApp>

//TO DO: Set limit on number of messages to display

import React from 'react';
import ReactDom from 'react-dom';
var socket = io('/io/chatroom');
var moment = require('moment-timezone');

var Message = React.createClass({
  render() {
    return (
      <div className="message">
        <strong className="messageUser">{this.props.user}</strong>
        <span className="messageDate">{this.props.createdAt}</span><br />
        <span className="messageText">{this.props.text}</span>
      </div>
    );
  }
});

var MessageList = React.createClass({
  componentDidUpdate() {
    this.scrollElement();
  },

  scrollElement() {
    var context = this;
    //Use setTimeout to place this at the bottom of the stack
    setTimeout(() => {
      window.requestAnimationFrame(() => {
        var node = ReactDom.findDOMNode(context);
        if (node !== undefined) {
          node.scrollTop = node.scrollHeight;
        }
      });
    }, 0);
  },

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
                createdAt={moment.utc(message.createdAt).startOf('second').fromNow()}
              />
            );
          })
        }
        <span id="bottom"></span>
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
      room: this.props.room,
      createdAt: this.props.createdAt
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
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Add to the conversation!'
            onChange={this.changeHandler}
            value={this.state.text}
            className="form-control mb-2 mr-sm-2 mb-sm-0"
          />
        </form>
      </div>
    );
  }
});

// Main component:
var ChatApp = React.createClass({

  getInitialState() {
    return {messages:[], text: ''};
  },

  componentDidMount() {
    socket.on('init', this._initialize);
    socket.emit('room', this.props.room);
    socket.on('message', this._messageRecieve);
    socket.on('savedMessages', this._savedMessagesReceive);
  },

  _messageRecieve(message) {
    var {messages} = this.state;
    messages.push(message);
    this.setState({messages});
    console.log('MESSAGES: ------> ', this.state.messages);
  },

  _savedMessagesReceive(messages) {
    this.setState({messages});
  },

  handleMessageSubmit(message) {
    var {messages} = this.state;
    this.setState({messages});
    socket.emit('message', message);
  },

  render() {
    return (
      <div>
        <h2>Chat about {this.props.room}</h2>
        <hr />
        <MessageList
          messages={this.state.messages}
        />
        <MessageForm
          onMessageSubmit={this.handleMessageSubmit}
          user={this.props.user}
          room={this.props.room}
          createdAt={moment.utc().format()}
        />
      </div>
    );
  }
});

module.exports = ChatApp;
