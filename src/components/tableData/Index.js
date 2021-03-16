import React, { Component } from 'react'
import { Table } from 'antd'
import { TableList } from '../../api/common'

import requestUrl from '../../api/requestUrl'

export default class TableComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //请求参数
      pageNumber: 1,
      pageSize: 10,
      keyWork: '',
      //数据
      data: [],
      //加载提示
      loadingTable: false,
    }
  }

  //生命周期挂载完成
  componentDidMount() {
    console.log(requestUrl[this.props.config.url])
    this.loadDada()
  }

  //获取列表数据
  loadDada = () => {
    const { pageSize, pageNumber } = this.state

    const requestData = {
      url: requestUrl[this.props.config.url],
      //   method: this.props.config.method,
      data: {
        pageNumber: pageNumber,
        pageSize: pageSize,
      },
    }

    TableList(requestData)
      .then((response) => {
        const responseData = response.data.data
        if (responseData.data) {
          this.setState({
            data: responseData.data,
          })
        }
        this.setState({ loadingTable: false })
      })
      .catch((error) => {
        this.setState({ loadingTable: false })
      })
  }
  onCheckebox = (value) => {
    console.log(value)
  }

  render() {
    const { loadingTable } = this.state
    const { thead, onCheckebox, rowKey } = this.props.config

    const rowSelection = {
      onChange: this.onCheckebox,
    }
    return (
      <Table
        loading={loadingTable}
        rowKey={rowKey || 'id'}
        rowSelection={onCheckebox ? rowSelection : null}
        columns={thead}
        dataSource={this.state.data}
        bordered
      />
    )
  }
}
