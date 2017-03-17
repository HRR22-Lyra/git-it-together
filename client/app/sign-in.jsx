<<<<<<< HEAD
import React from 'react';

export default class SignIn extends React.Component {
=======
class SignIn extends React.Component {
>>>>>>> added sign-in and chat
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
<<<<<<< HEAD
  toggleSignIn = () => {
    if(!this.state.show) {
      this.setSate({show: true});
    } else {
      this.setSate({show: false});
    }
  }

  render () {
    return(
      <div className="sign-in-form">
        <input type="button" className="sign-in-button" onCLick={this.toggleSignIn} value="login"/>
    )
  }
=======
>>>>>>> added sign-in and chat
}