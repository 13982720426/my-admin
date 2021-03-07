import React, { Component } from 'react'

class Code extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uesrname: '',
    }
  }
  render() {
    return (
      <Button
        type="danger"
        block
        loading={code_button_loading}
        disabled={code_button_disabled}
        onClick={this.getCode}
      >
        {/* <Button
    type="danger"
    block
    loading={code_button_loading}
    onClick={this.getCode}
  > */}
        {code_button_text}
      </Button>
    )
  }
}
