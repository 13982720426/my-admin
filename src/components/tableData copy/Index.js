import React, { Component, Fragment } from 'react'
import { Modal, message } from 'antd'
import { TableList, TabaDelete } from '../../api/common'

import requestUrl from '../../api/requestUrl'
import PropTypes from 'prop-types'
import TableBasis from './Table'
import FormSearch from '../formSearch/Index'

export default class TableComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //请求参数
      pageNumber: 1,
      pageSize: 10,
      searchData: {},
      //数据
      data: [],
      //加载提示
      loadingTable: false,
      //页码
      total: 0,
      //复选框
      checkboxValue: [],
      //确认弹窗
      modalVisible: false,
      modalconfirmLoading: false,
    }
  }

  //生命周期挂载完成
  componentDidMount() {
    this.loadDada()
    //返回子组件实例
    this.props.onRef(this) //子组件调用父组件方法，并把子组件实例传递给父组件
  }

  //获取列表数据
  loadDada = () => {
    const { pageSize, pageNumber, searchData } = this.state

    const requestData = {
      url: requestUrl[this.props.config.url],
      //   method: this.props.config.method,
      data: {
        pageNumber: pageNumber,
        pageSize: pageSize,
      },
    }
    //筛选项的拼接
    if (Object.keys(searchData).length !== 0) {
      //检测是否有数据，如果有数据就处理
      for (let key in searchData) {
        requestData.data[key] = searchData[key]
      }
    }

    // if (JSON.stringify(searchData) !== '{}') {
    //   console.log(searchData)
    // }

    //请求接口
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
  search = (searchData) => {
    this.setState(
      {
        pageNumber: 1,
        pageSize: 10,
        searchData: searchData,
      },
      () => {
        this.loadDada()
      }
    )
  }

  //删除
  onHandlerDelete(id) {
    this.setState({
      modalVisible: true,
    })
    if (id) {
      this.setState({ checkboxValue: [id] })
    }
  }
  //复选框
  onCheckbox = (checkboxValue) => {
    this.setState({
      checkboxValue,
    })
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
  onChangeSizePage = (value, page) => {
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

  //确认弹窗
  modalThen = () => {
    //判断是否已选择删除的数据
    if (this.state.checkboxValue.length === 0) {
      message.info('请选择需要删除的数据')
      return false
    }
    this.setState({ confirmLoading: true })
    const id = this.state.checkboxValue.join()
    const requestData = {
      url: requestUrl[`${this.props.config.url}Delete`],
      //   method: this.props.config.method,
      data: {
        id,
      },
    }

    TabaDelete(requestData).then((response) => {
      message.info(response.data.message)
      this.setState({
        modalVisible: false,
        id: '',
        confirmLoading: false,
        selectedRowKeys: [],
      })
      //重新加载数据
      this.loadDada()
    })
  }

  render() {
    // const { loadingTable } = this.state
    const { thead, onCheckbox, rowkey, formItem } = this.props.config

    const rowSelection = {
      onChange: this.onCheckbox,
    }
    return (
      <Fragment>
        {/**筛选 */}
        <FormSearch formItem={formItem} search={this.search} />

        {/* table UI组件 */}
        <TableBasis
          columns={thead}
          dataSource={this.state.data}
          total={this.state.total}
          changePageCurrent={this.onChangeCurrnePage}
          changePageSize={this.onChangeSizePage}
          handlerDelete={() => this.onHandlerDelete()}
          rowSelection={onCheckbox ? rowSelection : null}
          rowkey={rowkey}
        />

        {/* 确认弹窗 */}
        <Modal
          title="提示"
          visible={this.state.modalVisible}
          onOk={this.modalThen}
          onCancel={() => {
            this.setState({ modalVisible: false })
          }}
          okText="确认"
          cancelText="取消"
          confirmLoading={this.state.modalconfirmLoading}
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
//校验数据类型
TableComponent.propTypes = {
  config: PropTypes.object,
}
//默认值
TableComponent.defaultProps = {
  batchButton: true,
}
