import React, { Component } from 'react'
import { Button, Form, Select } from 'antd'
import PropTypes from 'prop-types'
import { requestData } from '../../api/common'
import requestUrl from '../../api/requestUrl'

const { Option } = Select
export default class SelectComponent extends Component {
  constructor(props) {
    super()
    this.state = {
      props: props.propsKey,
      options: [],
      //change value
      value: '',
      name: props.name,
    }
  }
  componentDidMount() {
    this.getSelectList()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let { value, name } = nextProps
    if (!value) {
      return false
    }
    if (Object.prototype.toString.call(value) == '[object Object]') {
      value = value[name]
    }
    if (value != prevState.state) {
      return {
        value: value,
      }
    }
    return null
  }

  //请求数据
  getSelectList = () => {
    const url = this.props.url
    const data = {
      url: requestUrl[url],
      data: {},
    }
    //不存在url时，阻止往下
    if (!data.url) {
      return false
    }
    //接口
    requestData(data).then((response) => {
      this.setState({
        options: response.data.data.data,
      })
      //   console.log(response.data.data.data)
    })
  }

  //select onchange
  onChange = (value) => {
    this.setState({ value })
    this.triggerChange(value)
  }
  triggerChange = (changedValue) => {
    const onChange = this.props.onChange
    if (onChange) {
      onChange({ [this.state.name]: changedValue })
    }
  }

  render() {
    const { value, label } = this.state.props
    return (
      <Select value={this.state.value} onChange={this.onChange}>
        {this.state.options &&
          this.state.options.map((elem) => {
            return (
              <Option value={elem[value]} key={Number(elem[value])}>
                {elem[label]}
              </Option>
            )
          })}
      </Select>
    )
  }
}

//校验数据类型
SelectComponent.propTypes = {
  formConfig: PropTypes.object,
}
//默认值
SelectComponent.defaultProps = {
  formConfig: {},
}
