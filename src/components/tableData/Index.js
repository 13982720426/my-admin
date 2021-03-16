import React, { Component, Fragment } from 'react'
import { Table, Pagination, Row, Col, Button } from 'antd'
import { TableList } from '../../api/common'

import requestUrl from '../../api/requestUrl'
import PropTypes from 'prop-types'

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
      //页码
      total: 0,
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
            total: responseData.total,
          })
        }
        this.setState({ loadingTable: false })
      })
      .catch((error) => {
        this.setState({ loadingTable: false })
      })
  }
  //复选框
  onCheckebox = (value) => {
    // console.log(value)
  }
  //当前页
  onChangeCurrnePage = (value) => {
    // console.log(value)
    this.setState(
      {
        pageNumber: value,
      },
      () => {
        //setState第二个参数是进行异步回调，当改完值需要用到时则使用异步回调方法
        this.loadDada()
      }
    )
  }
  //下拉页码
  onShowSizeChange = (value, page) => {
    this.setState(
      {
        pageNumber: 1,
        pageSize: page,
      },
      () => {
        //setState第二个参数是进行异步回调，当改完值需要用到时则使用异步回调方法
        this.loadDada()
      }
    )
  }

  render() {
    const { loadingTable } = this.state
    const { thead, onCheckebox, rowKey } = this.props.config

    const rowSelection = {
      onChange: this.onCheckebox,
    }
    return (
      <Fragment>
        <Table
          pagination={false}
          loading={loadingTable}
          rowKey={rowKey || 'id'}
          rowSelection={onCheckebox ? rowSelection : null}
          columns={thead}
          dataSource={this.state.data}
          bordered
        />
        <Row>
          <Col span={8}>
            {this.props.batchButton && (
              <Button onClick={() => this.onHandlerDelete()}>批量删除</Button>
            )}
          </Col>
          <Col span={16}>
            <Pagination
              onShowSizeChange={this.onShowSizeChange}
              onChange={this.onChangeCurrnePage}
              className="pull-right"
              //   total={this.state.total}
              total={15}
              showSizeChanger
              showQuickJumper
              showTotal={(total) => `Total ${total} items`}
            />
          </Col>
        </Row>
      </Fragment>
    )
  }
}
//校验数据类型
TableComponent.propTypes = {
  config: PropTypes.object,
}
//默认值
TableComponent.defaultProps = {
  batchButton: true,
}
