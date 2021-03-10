import React, { Component } from 'react'
import { Layout } from 'antd'
const { Sider, Header, Content } = Layout
import './layout.scss'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Layout className="layout-wrap">
        <Sider width="250px">菜单栏</Sider>
        <Layout>
          <Header>头部</Header>
          <Content>内容</Content>
        </Layout>
      </Layout>
    )
  }
}

export default Index