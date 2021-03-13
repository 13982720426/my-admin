import React, { Component, Fragment } from 'react'

import { Link, withRouter } from 'react-router-dom'

import { UserOutlined } from '@ant-design/icons'

import Router from '../../router/index'

import { Menu } from 'antd'
const { SubMenu } = Menu

class AsidMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKeys: [],
      openKeys: [],
    }
  }
  componentDidMount() {
    const pathname = this.props.location.pathname
    const menuKey = pathname.split('/').slice(0, 3).join('/') //拆分字符串为数组，取前三个，将数组转化成字符串

    const menuHigh = {
      selectedKeys: pathname,
      openKeys: menuKey,
    }
    this.selectMenuHigh(menuHigh)
  }

  //选择菜单
  selectMenu = ({ item, key, keyPath, domEvent }) => {
    const menuHigh = {
      selectedKeys: key,
      openKeys: keyPath[keyPath.length - 1], //数组的长度减一，即是数组的最后一项
    }
    this.selectMenuHigh(menuHigh)
  }
  openMenu = (openKeys) => {
    this.setState({
      openKeys: [openKeys[openKeys.length - 1]],
    })
  }

  //菜单高光
  selectMenuHigh = ({ selectedKeys, openKeys }) => {
    this.setState({
      selectedKeys: [selectedKeys],
      openKeys: [openKeys],
    })
  }

  //无级菜单
  renderMenu = ({ title, key }) => {
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }
  //子级菜单
  renderSubMenu = ({ title, key, children }) => {
    return (
      <SubMenu key={key} icon={<UserOutlined />} title={title}>
        {children &&
          children.map((item) => {
            return item.children && item.children.length > 0
              ? this.renderSubMenu(item)
              : this.renderMenu(item)
          })}
      </SubMenu>
    )
  }

  render() {
    const { selectedKeys, openKeys } = this.state
    return (
      <Fragment>
        <Menu
          onOpenChange={this.openMenu}
          onClick={this.selectMenu}
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          style={{ height: '100%' }}
        >
          {Router &&
            Router.map((firstItem) => {
              return firstItem.children && firstItem.children.length > 0
                ? this.renderSubMenu(firstItem)
                : this.renderMenu(firstItem)
            })}
        </Menu>
      </Fragment>
    )
  }
}

export default withRouter(AsidMenu)
