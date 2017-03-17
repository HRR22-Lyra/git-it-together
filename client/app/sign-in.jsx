import React from 'react';

export default class SignIn extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

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

      <div className="newDiv"</div>
    )
  }

}