import React, { Component } from 'react'
import './index.scss'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
class Login extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="form-wrap">
        <div>
          <div className="form-header">
            <h4 className="column">登录</h4>
            <span>账号注册</span>
          </div>
          <div className="form-content"></div>
        </div>
      </div>
    )
  }
}

export default Login
