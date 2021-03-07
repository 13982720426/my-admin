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
        <div className="form-header">
          <h4 className="column">登录</h4>
          <span>账号注册</span>
          <div className="form-content">
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
