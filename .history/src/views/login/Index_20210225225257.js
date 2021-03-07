import React, { Component } from 'react'
import './index.scss'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
class Login extends Component {
  constructor() {
    super()
    this.state = {}
  }

  onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  render() {
    return (
      <div className="form-wrap">
        <div>
          <LoginForm></LoginForm>
        </div>
        <div>
          <RegisterForm></RegisterForm>
        </div>
      </div>
    )
  }
}

export default Login
