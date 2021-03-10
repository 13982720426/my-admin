import React, { Component } from 'react'
import { Layout } from 'antd'
import './layout.scss'

import Aside from './components/aside'

const { Sider, Header, Content } = Layout

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Layout className="layout-wrap">
        <Layout>
          <Sider width="250px">
            <Aside />
          </Sider>
          <Header className="layout-header">头部</Header>
          <Content className="layout-main">内容</Content>
        </Layout>
      </Layout>
    )
  }
}

export default Index
