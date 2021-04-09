import React, { Component, Fragment } from 'react'

import { message, Select } from 'antd'
import { Add, Detailed, Edit } from '../../api/job'
import FormCom from '../../components/form/Index'
import SelectCom from '../../components/select/Index'
import { requestData } from '../../api/common'
import requestUrl from '../../api/requestUrl'
const { Option } = Select
class DepartmentAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      id: this.props.location.state ? this.props.location.state.id : '',
      //select
      select: [
        { value: 10, label: '研发部' },
        { value: 11, label: '行政部' },
      ],
      formConfig: {
        url: 'jobAdd',
        editKey: '',
        initValue: {
          number: 0,
          status: true,
        },
        setFieldValue: {},
        formatFormKey: 'parentId',
      },
      formLayout: {
        labelCol: { span: 2 },
        wrapperCol: { span: 20 },
      },
      formItem: [
        {
          type: 'Slot',
          label: '部门',
          name: 'parentId',
          required: true,
          slotName: 'department',
          style: { width: '200px' },
          placeholder: '请选择部门',
        },
        {
          type: 'Input',
          label: '职位名称',
          name: 'jobName',
          required: true,
          style: { width: '200px' },
          placeholder: '请输入职位名称',
        },
        {
          type: 'Radio',
          label: '禁启用',
          name: 'status',
          required: true,
          options: [
            { label: '禁用', value: false },
            { label: '启用', value: true },
          ],
        },
        {
          type: 'Input',
          label: '描述',
          name: 'content',
          required: true,
          placeholder: '请输入描述内容',
        },
      ],
    }
  }

  componentDidMount() {
    this.state.id && this.getDetailed()
    this.getSelectList()
  }

  getDetailed = () => {
    Detailed({ id: this.state.id }).then((response) => {
      this.setState({
        formConfig: {
          ...this.state.formConfig,
          setFieldValue: response.data.data,
          url: 'jobEdit',
          editKey: 'jobId',
        },
      })
      // this.refs.form.setFieldsValue(response.data.data);
    })
  }

  //请求数据
  getSelectList = () => {
    const data = {
      url: requestUrl['getDepartmentList'],
    }
    //不存在url时，阻止往下
    if (!data.url) {
      return false
    }
    //接口
    requestData(data).then((response) => {
      this.setState({
        select: response.data.data.data,
      })
      //   console.log(response.data.data.data)
    })
  }

  /** 编辑信息 */
  onHandlerEdit = (value) => {
    const requestData = value
    requestData.id = this.state.id
    Edit(requestData)
      .then((response) => {
        const data = response.data
        message.info(data.message)
        this.setState({
          loading: false,
        })
      })
      .catch((error) => {
        this.setState({
          loading: false,
        })
      })
  }
  /** 添加信息 */
  onHandlerAdd = (value) => {
    const requestData = value
    Add(requestData)
      .then((response) => {
        const data = response.data
        message.info(data.message)
        this.setState({
          loading: false,
        })
      })
      .catch((error) => {
        this.setState({
          loading: false,
        })
      })
  }
  /** 提交表单 */
  onHandlerSubmit = (value) => {
    this.state.id ? this.onHandlerEdit(value) : this.onHandlerAdd(value)
  }

  render() {
    return (
      <Fragment>
        <FormCom
          formItem={this.state.formItem}
          formLayout={this.state.formLayout}
          formConfig={this.state.formConfig}
        >
          {/**插槽 */}
          <Select ref="department">
            {this.state.select &&
              this.state.select.map((elem) => {
                return (
                  <Option value={elem.id} key={elem.id}>
                    {elem.name}
                  </Option>
                )
              })}
          </Select>
        </FormCom>
      </Fragment>
    )
  }
}
export default DepartmentAdd
