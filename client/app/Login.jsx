import React from 'react'
import AuthService from '../config/AuthService.js'
//import styles from './styles.module.css'

export class Login extends React.Component {


  render() {
    const { auth } = this.props

    return (
      <div className="login">
        <h2>Login</h2>
        <div className="jumbotron">
            <button className="btn btn-primary" onClick={auth.login.bind(this)}>Login</button>
        </div>
      </div>
    )
  }
}

export default Login;
