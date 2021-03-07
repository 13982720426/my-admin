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

  onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
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
