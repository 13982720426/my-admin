import React, { Component } from 'react'
import { Layout } from 'antd'
import './layout.scss'

import LayoutAside from './components/Aside'
import LayoutHeader from './components/Header'
import ContainerMain from '../../components/containerMain/index'

const { Sider, Header, Content } = Layout

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Layout className="layout-wrap">
        <Header className="layout-header">
          <LayoutHeader />
        </Header>
        <Layout>
          <Sider width="250px">
            <LayoutAside />
          </Sider>
          <ContainerMain />
        </Layout>
      </Layout>
    )
  }
}

export default Index
