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
      options: [
        { value: 760, label: '研发部' },
        { value: 757, label: '行政部' },
      ],
    }
  }
  componentDidMount() {
    this.getSelectList()
  }
  getSelectList = () => {
    console.log(this.state.props)
    const url = this.props.url
    const data = {
      url: requestUrl[url],
      data: {},
    }
    requestData(data).then((response) => {
      this.setState({
        options: response.data.data.data,
      })
      console.log(response.data.data.data)
    })
  }

  render() {
    const { value, label } = this.state.props
    return (
      <Select>
        {this.state.options &&
          this.state.options.map((elem) => {
            return (
              <Option value={elem[value]} key={elem[value]}>
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
