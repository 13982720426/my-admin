import React, { Component } from 'react'
import { Button, message } from 'antd'

class Code extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uesrname: '',
      button_text: '获取验证码',
    }
  }
  //获取验证码
  getCode = () => {
    if (!this.state.username) {
      message.warning('用户名不能为空！', 1)
      return false
    }
    this.setState({
      code_button_loading: true,
      code_button_text: '发送中',
    })

    const requestData = {
      username: this.state.username,
      module: 'login',
    }
    GetCode(requestData)
      .then((response) => {
        //执行倒计时
        this.countDown()

        console.log(response)
      })
      .catch((error) => {
        this.setState({
          code_button_loading: false,
          code_button_text: '发送失败',
        })
        //后端验证码接口应该没有部署 暂时不能获取验证码
        this.countDown()
      })
  }
  render() {
    return (
      <Button
        type="danger"
        block
        // loading={code_button_loading}
        // disabled={code_button_disabled}
        onClick={this.getCode}
      >
        {this.state.button_text}
      </Button>
    )
  }
}
