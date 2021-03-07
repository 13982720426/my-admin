import React, { Component, Fragment } from 'react'
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
      <Fragment>
        <LoginForm></LoginForm>
      </Fragment>
    )
  }
}

export default Login
