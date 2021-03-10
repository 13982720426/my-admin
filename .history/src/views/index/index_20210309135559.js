import React, { Component } from 'react'
import { Layout } from 'antd'
const { Sider, Header, Content } = Layout

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Layout>
        <Sider>菜单栏</Sider>
        <Layout>
          <Header>头部</Header>
          <Content>内容</Content>
        </Layout>
      </Layout>
    )
  }
}

export default Index
