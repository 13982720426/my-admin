import React, { Component, Fragment } from 'react'
import { Form, Input, Button, Table, Switch, message, Modal } from 'antd'
import { Link } from 'react-router-dom'

import { GetList, Delete, Status } from '../../api/department'
// import { GetList, Delete } from '@api/department'//webpack路径配置有bug，无法找到

export default class DepartmentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //请求参数
      pageNumber: 1,
      pageSize: 10,
      keyWork: '',
      //复选框数据
      selectedRowKeys: [],
      //警告弹窗
      visible: false,
      //弹窗确定按钮
      confirmLoading: false,
      //id
      id: '',
      //表头
      columns: [
        { title: '部门名称', dataIndex: 'name', key: 'name' },
        {
          title: '禁启用',
          dataIndex: 'status',
          key: 'status',
          render: (text, rowData) => {
            return (
              <Switch
                onChange={() => {
                  this.onHandlerSwitch(rowData)
                }}
                checkedChildren="启用"
                unCheckedChildren="禁用"
                defaultChecked={rowData.status === '1' ? true : false}
              />
            )
          },
        },
        { title: '人员数量', dataIndex: 'number', key: 'number' },
        {
          title: '操作',
          dataIndex: 'operation',
          key: 'operation',
          width: 215,
          render: (text, rowData) => {
            return (
              <div className="inline-button">
                <Button
                  type="primary"
                  //   onClick={() => this.onHandlerEdit(rowData.id)}
                >
                  {/* <Link to={'/index/department/add?id=' + rowData.id}> */}

                  {/* <Link
                    to={{
                      pathname: '/index/department/add',
                      query: { id: rowData.id },
                    }}
                  > */}

                  <Link
                    to={{
                      pathname: '/index/department/add',
                      state: { id: rowData.id },
                    }}
                  >
                    编辑
                  </Link>
                </Button>
                <Button onClick={() => this.onHandlerDelete(rowData.id)}>
                  删除
                </Button>
              </div>
            )
          },
        },
      ],
      //数据
      data: [],
    }
  }

  //生命周期挂载完成
  componentDidMount() {
    this.loadDada()
  }
  //获取列表数据
  loadDada = () => {
    const { pageSize, pageNumber, keyWork } = this.state
    const requestData = {
      pageNumber: pageNumber,
      pageSize: pageSize,
    }
    if (keyWork) {
      requestData.name = keyWork
    }
    GetList(requestData).then((response) => {
      const responseData = response.data.data
      if (responseData.data) {
        this.setState({
          data: responseData.data,
        })
      }
    })
  }
  //搜索
  onFinish = (value) => {
    this.setState({
      keyWork: value.name,
      pageNumber: 1,
      pageSize: 10,
    })
    //请求数据
    this.loadDada()
  }
  //删除
  onHandlerDelete(id) {
    if (!id) {
      return false
    }
    this.setState({
      visible: true,
      id,
    })
  }
  //禁启用
  onHandlerSwitch(data) {
    if (!data.status) {
      return false
    }
    const requestData = {
      id: data.id,
      status: data.status === '1' ? false : true,
    }
    Status(requestData).then((response) => {
      message.info(response.data.message)
    })
  }

  //复选框
  onCheckebox = (selectedRowKeys) => {
    // this.setState({ selectedRowKeys })
    console.log(selectedRowKeys)
  }

  //弹窗
  modalThen = () => {
    Delete({ id: this.state.id }).then((response) => {
      message.info(response.data.message)
      this.loadDada()
      this.setState({
        visible: false,
        id: '',
        confirmLoading: false,
      })
    })
  }

  render() {
    const { columns, data } = this.state
    const rowSelection = {
      onChange: this.onCheckebox,
    }
    return (
      <Fragment>
        <Form layout="inline" onFinish={this.onFinish}>
          <Form.Item name="name" label="部门名称">
            <Input placeholder="请输入部门名称" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              搜索
            </Button>
          </Form.Item>
        </Form>
        <div className="table-wrap">
          <Table
            rowSelection={rowSelection}
            rowKey="id"
            columns={columns}
            dataSource={data}
            bordered
          ></Table>
        </div>
        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.modalThen}
          onCancel={() => {
            this.setState({ visible: false })
          }}
          okText="确认"
          cancelText="取消"
          confirmLoading={this.state.confirmLoading}
        >
          <p className="text-center">
            确定删除此信息？
            <strong className="color-red"> 删除后无法恢复！</strong>
          </p>
        </Modal>
      </Fragment>
    )
  }
}
