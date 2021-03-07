import React, { Component } from 'react'
import './index.scss'

import LoginForm from './LoginForm'
import registerForm from './registerForm'

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
        <LoginForm></LoginForm>
      </div>
    )
  }
}

export default Login
