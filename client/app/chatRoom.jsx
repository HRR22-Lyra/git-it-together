import React from 'react';
import messages from './chatRoom.jsx';

export default class chatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      messages: [],
      text: ''
    };

    initialize = (data) => {
      let {users, name} = data;
      this.setState({users, user:name});
    };

    userJoined = (data) => {
      let {users, messages} = this.state;
      let {name} = data;
      users.push(name);
      messages.push({
        user: 'anonymous',
        text: name + ' joined!'
      });
      this.setState({users, messages});
    };

    addMessage = (messages) => {
      const messages = this.state.messages;
      messages.push(message);
      this.setState({ messages })
    };

    //functionality to connect to server

    //functionality to listen for messages from the server

    handleMessageSubmit = (message) => {
      var {messages} = this.state;
        messages.push(message);
        this.setState({messages});
    };

    sendHandler = (message) => {
      const messageObject = {
        username: this.props.username,
        message
      }

      //send message to server

      this.addmessage(messageObject);
    }
  }

  render() {
    return (
      <div>
        <UserList
          users={this.state.users}
      />
      <MessageList
        messages={this.state.messages}
      />
      </div>
    );
  }
}