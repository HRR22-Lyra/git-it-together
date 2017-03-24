import React from 'react'
import AuthService from '../config/AuthService.js'
//import styles from './styles.module.css'

export class Login extends React.Component {


  render() {
    const { auth } = this.props

    return (
      <div className="container login">
        <div className="jumbotron">
          <div className="row align-items-center justify-contents-center">
            <div className="col">
              <h1>Git It Together</h1>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <img src="client/assets/unicorn-head-silhouette.png" alt="Git It Together logo" />
            </div>
            <div className="w-100"></div>
            <div className="col">
              <button className="btn btn-primary" onClick={auth.login.bind(this)}>Login</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
