import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button, Switch, message } from 'antd'

import { Status } from '../../api/department'
// import { GetList, Delete } from '@api/department'//webpack路径配置有bug，无法找到
import TableComponent from '../../components/tableData/Index'

export default class DepartmentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //flag
      flag: false,
      //请求参数
      pageNumber: 1,
      pageSize: 10,
      keyWork: '',
      //id
      id: '',
      //表头
      tableConfig: {
        url: 'departmentList',
        onCheckbox: true,
        // batchButton: false,
        thead: [
          {
            title: '部门名称',
            dataIndex: 'name',
            key: 'name',
            render: (name, rowData) => {
              return <a href={rowData.id}>{name}</a>
            },
          },
          {
            title: '禁启用',
            dataIndex: 'status',
            key: 'status',
            render: (state, rowData) => {
              return (
                <Switch
                  onChange={() => {
                    this.onHandlerSwitch(rowData)
                  }}
                  loading={rowData.id === this.state.id}
                  checkedChildren="启用"
                  unCheckedChildren="禁用"
                  defaultChecked={state === '1' ? true : false}
                  //   defaultChecked={state === true ? true : false}
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
                  <Button onClick={() => this.delete(rowData.id)}>删除</Button>
                  {/**
                   * 在父组件获取子组件的实例
                   * 1.在子组件调用父组件方法，并把子组件实例传递给父组件，(已经存储了子组件的实例)
                   * 2.通过实例调用子组件的方法
                   *
                   */}
                </div>
              )
            },
          },
        ],
      },

      //数据
      data: [],
    }
  }

  //生命周期挂载完成
  componentDidMount() {}

  //获取子组件实例
  getChildRef = (ref) => {
    this.tableComponent = ref //存储子组件
  }

  //禁启用
  onHandlerSwitch(data) {
    if (!data.status) {
      return false
    }
    if (this.state.flag) {
      return false
    }
    const requestData = {
      id: data.id,
      status: data.status === '1' ? false : true,
      //   status: data.status === false ? false : true,
    }
    this.setState({ id: data.id }) //第一种做法，用组件本身异步
    // this.setState({ flag: true }) //第二种,自己做开关

    Status(requestData)
      .then((response) => {
        message.info(response.data.message)
        this.setState({ id: '' })
        // this.setState({ flag: false })
      })
      .catch((error) => {
        this.setState({ id: '' })
        // this.setState({ flag: false })
      })
  }
  //删除
  delete = (id) => {
    this.tableComponent.onHandlerDelete(id)
  }

  render() {
    return (
      <Fragment>
        <TableComponent
          onRef={this.getChildRef}
          batchButton={true}
          config={this.state.tableConfig}
        />
      </Fragment>
    )
  }
}
