import React, { Component } from 'react'

class Code extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uesrname: '',
      code_button_text: '获取验证码',
    }
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
        {code_button_text}
      </Button>
    )
  }
}
