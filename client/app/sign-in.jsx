import React from 'react';

export default class SignIn extends React.Component {


<<<<<<< HEAD

=======
>>>>>>> c53185e3c60f4fcf013713cbe890d02f8b9d5f3a
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

<<<<<<< HEAD



=======
>>>>>>> c53185e3c60f4fcf013713cbe890d02f8b9d5f3a
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