import React, { Component } from 'react'
import { Layout } from 'antd'
const { Sider, Header, Main } = Layout

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Layout>
        <Sider>菜单栏</Sider>
      </Layout>
    )
  }
}

export default Index
