import React, { Component, Fragment } from 'react'

import { Link } from 'react-router-dom'

import { UserOutlined } from '@ant-design/icons'

import Router from '../../router/index'

import { Menu } from 'antd'
const { SubMenu } = Menu

class AsidMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
    return (
      <Fragment>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
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

export default AsidMenu
