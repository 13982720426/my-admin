import React, { Component, Fragment } from 'react'

import { Button, Form, Input, InputNumber, message, Radio } from 'antd'
import { DepartmentAddApi, Detailed, Edit } from '../../api/department'
import FormCom from '../../components/form/Index'
export default class DepartmentAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      id: '',
      formConfig: {
        url: 'departmentAdd',
      },
      formLayout: {
        labelCol: { span: 2 },
        wrapperCol: { span: 20 },
      },
      formItem: [
        {
          type: 'Input',
          label: '部门名称',
          name: 'name',
          required: true,
          style: { width: '200px' },
          placeholder: '请输入部门名称',
        },
        {
          type: 'Radio',
          label: '禁启用',
          name: 'status',
          required: true,
          options: [
            {
              label: '禁用',
              value: false,
            },
            {
              label: '启用',
              value: true,
            },
          ],
        },
        {
          type: 'InputNumber',
          label: '人员数量',
          name: 'number',
          required: true,
          min: 0,
          max: 999,
          style: { width: '200px' },
          placeholder: '请输入人员数量',
        },
        // {
        //   type: 'Select',
        //   label: '部门11名称',
        //   name: 'namea',
        //   required: true,
        //   options: [
        //     {
        //       label: '研发部',
        //       value: 'a',
        //     },
        //     {
        //       label: '行政部',
        //       value: 'b',
        //     },
        //   ],
        //   style: { width: '150px' },
        //   placeholder: '请选择部门',
        // },
      ],
    }
  }
  componentWillMount() {
    if (this.props.location.state) {
      this.setState({
        id: this.props.location.state.id,
      })
    }
  }

  componentDidMount() {
    console.log(this.state)
    this.getDetailed()
    // console.log(this.props.location.query.id)
    // console.log(this.props.location.state.id)
  }
  getDetailed = () => {
    if (!this.props.location.state) {
      return false
    }
    Detailed({ id: this.state.id }).then((response) => {
      this.refs.form.setFieldsValue(response.data.data)
    })
  }

  //编辑信息
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
  render() {
    return (
      <Fragment>
        <FormCom
          formItem={this.state.formItem}
          formLayout={this.state.formLayout}
          formConfig={this.state.formConfig}
        />
      </Fragment>
    )
  }
}
