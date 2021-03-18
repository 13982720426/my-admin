import React, { Component } from 'react'
import { Button, Form, Input, Select, InputNumber, Radio, message } from 'antd'

import { requestData } from '../../api/common'
import requestUrl from '../../api/requestUrl'

const { Option } = Select
export default class FormCom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      mesPreix: {
        Input: '请输入',
        Radio: '请选择',
        Select: '请选择',
      },
    }
  }

  rules = (item) => {
    const { mesPreix } = this.state
    let rules = []
    //是否必填
    if (item.required) {
      let message = item.message || `${mesPreix[item.type]}${item.label}` //如果是输入框 请输入xxx， 如果是选择项 请选择xxx
      rules.push({ required: true, message })
    }
    if (item.rules && item.rules.length > 0) {
      rules = rules.concat(item.rules)
    }
    return rules
  }

  //input
  inputElem = (item) => {
    const rules = this.rules(item)
    return (
      <Form.Item
        label={item.label}
        name={item.name}
        key={item.name}
        rules={rules}
      >
        <Input style={item.style} placeholder={item.placeholder} />
      </Form.Item>
    )
  }
  //inputNumper
  inputNumberElem = (item) => {
    const rules = this.rules(item)
    return (
      <Form.Item
        label={item.label}
        name={item.name}
        key={item.name}
        rules={rules}
      >
        <InputNumber min={item.min} max={item.max} />
      </Form.Item>
    )
  }
  //radio禁启用
  radioElem = (item) => {
    const rules = this.rules(item)
    return (
      <Form.Item
        label={item.label}
        name={item.name}
        key={item.name}
        rules={rules}
      >
        <Radio.Group>
          {item.options &&
            item.options.map((elem) => {
              return (
                <Radio value={elem.value} key={elem.value}>
                  {elem.label}
                </Radio>
              )
            })}
        </Radio.Group>
      </Form.Item>
    )
  }
  //select
  selectElem = (item) => {
    const rules = this.rules(item)
    return (
      <Form.Item
        label={item.label}
        name={item.name}
        key={item.name}
        rules={rules}
      >
        <Select style={item.style} placeholder={item.placeholder}>
          {item.options &&
            item.options.map((elem) => {
              return (
                <Option value={elem.value} key={elem.value}>
                  {elem.label}
                </Option>
              )
            })}
        </Select>
      </Form.Item>
    )
  }
  //初始化
  initFormItem = () => {
    const { formItem } = this.props
    if (!formItem || (formItem && formItem.length === 0)) {
      return false
    }
    const formList = []
    formItem.map((item) => {
      if (item.type === 'Input') {
        formList.push(this.inputElem(item))
      }
      if (item.type === 'Select') {
        formList.push(this.selectElem(item))
      }
      if (item.type === 'InputNumber') {
        formList.push(this.inputNumberElem(item))
      }
      if (item.type === 'Radio') {
        formList.push(this.radioElem(item))
      }
    })
    return formList
  }

  onSubmit = (value) => {
    //添加、修改
    const data = {
      url: requestUrl[this.props.formConfig.url],
      data: value,
    }
    this.setState({ loading: true })
    requestData(data)
      .then((response) => {
        const responseData = response.data
        //提示
        message.info(responseData.message)
        //取消按钮加载
        this.setState({ loading: false })
      })
      .catch((error) => {
        this.setState({ loading: false })
      })
  }

  render() {
    return (
      <Form
        ref="form"
        onFinish={this.onSubmit}
        initialValues={{ status: true, number: 0 }}
        {...this.props.formLayout}
      >
        {this.initFormItem()}
        <Form.Item>
          <Button loading={this.state.loading} type="primary" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
    )
  }
}