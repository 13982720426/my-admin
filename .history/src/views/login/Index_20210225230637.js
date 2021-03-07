import React, { Component } from 'react'
import './index.scss'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
class Login extends Component {
  constructor() {
    super()
    this.state = {
      formType: 'login',
    }
  }
  switchForm = (value) => {}

  render() {
    return (
      <div className="form-wrap">
        {this.state.formType === 'login' ? (
          <LoginForm></LoginForm>
        ) : (
          <RegisterForm></RegisterForm>
        )}
      </div>
    )
  }
}

export default Login
