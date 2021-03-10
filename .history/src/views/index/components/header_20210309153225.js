import React, { Component } from 'react'
import './aside.scss'

class LayoutHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Layout className="layout-wrap">
        <h1 className="logo">
          <span>LOGO</span>
        </h1>
      </Layout>
    )
  }
}

export default LayoutHeader
