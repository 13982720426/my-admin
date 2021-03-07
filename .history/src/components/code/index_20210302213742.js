import React, { Component } from 'react'
import { Button, message } from 'antd'
import { GetCode } from '../../api/account'

import { validate_email } from '../../utils/validate'

let timer = null

class Code extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uesrname: props.username,
      button_text: '获取验证码',
      button_loading: false,
      button_disabled: false,
    }
  }

  // this.state.username每次都会去获取
  componentWillReceiveProps({ username }) {
    this.setState({
      username: username, //数据的变量和key是相同的情况下，只是用一个就可以
    })
  }

  //组件销毁
  componentWillUnmount() {
    clearInterval(timer)
  }

  //获取验证码
  getCode = () => {
    const username = this.state.username
    if (!username) {
      message.warning('用户名不能为空！', 1)
      return false
    }
    if (!validate_email(username)) {
      message.warning('邮箱格式不正确', 1)
      return false
    }

    this.setState({
      button_loading: true,
      button_text: '发送中',
    })

    const requestData = {
      username,
      module: 'login',
    }
    GetCode(requestData)
      .then((response) => {
        //执行倒计时
        this.countDown()

        this.setState({
          button_loading: false,
          code_button_text: '重新获取',
        })
      })
      .catch((error) => {
        this.setState({
          button_loading: false,
          button_text: '发送失败',
        })
        //后端验证码接口应该没有部署 暂时不能获取验证码
        this.countDown()
      })
  }

  //倒计时
  countDown = () => {
    let timer = null
    let sec = 60
    this.setState({
      button_disabled: true,
      button_loading: false,
      button_text: `${sec}S`,
    })
    timer = setInterval(() => {
      sec--
      if (sec <= 0) {
        this.setState({
          button_disabled: false,
          button_text: '重新获取',
        })
        clearInterval(timer)
        return false
      }
      this.setState({
        button_text: `${sec}S`,
      })
    }, 1000)
  }

  render() {
    return (
      <Button
        type="danger"
        block
        loading={this.state.button_loading}
        disabled={this.state.button_disabled}
        onClick={this.getCode}
      >
        {this.state.button_text}
      </Button>
    )
  }
}

export default Code
