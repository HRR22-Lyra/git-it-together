import React from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap' //    "react-bootstrap": "^0.30.0-rc.1",
import AuthService from '../config/AuthService.js'
//import styles from './styles.module.css'

export class Login extends React.Component {


  render() {
    const { auth } = this.props

    return (
      <div className="login">
        <h2>Login</h2>
        <div className="jumbotron">
          <ButtonToolbar >
            <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
          </ButtonToolbar>
        </div>
      </div>
    )
  }
}

export default Login;
