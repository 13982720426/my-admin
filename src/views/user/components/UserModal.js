import React, { Component } from 'react'
import { message, Modal } from 'antd'

import FormCom from '@c/form/Index'
import { validate_phone, validate_pass } from '@/utils/validate'
import { UserAdd } from '@/api/user'
import CryptoJs from 'crypto-js'

class UserModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
      formConfig: {
        url: 'jobAdd',
        editKey: '',
        initValue: {
          number: 0,
          status: '',
          parentId: '',
        },
        setFieldValue: {},
        formatFormKey: 'parentId',
      },
      formLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
      },
      formItem: [
        {
          type: 'Input',
          label: '用户名',
          name: 'username',
          required: true,
          style: { width: '200px' },
          placeholder: '请输入邮箱',
        },

        {
          type: 'Input',
          label: '密码',
          name: 'password',
          required: true,
          style: { width: '200px' },
          placeholder: '请输入密码',
          rules: [
            () => ({
              validator(rule, value) {
                if (validate_pass(value)) {
                  return Promise.resolve()
                }
                return Promise.reject('密码不正确格式有误')
              },
            }),
          ],
        },
        {
          type: 'Input',
          label: '确认密码',
          name: 'passwords',
          required: true,
          style: { width: '200px' },
          placeholder: '请再次输入密码',
          rules: [
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!validate_pass(value)) {
                  return Promise.reject('密码不正确格式有误')
                }
                if (getFieldValue('password') !== value) {
                  return Promise.reject('两次密码不相同')
                }
                return Promise.resolve()
              },
            }),
          ],
        },
        {
          type: 'Input',
          label: '真实名称',
          name: 'truename',
          required: true,
          style: { width: '200px' },
          placeholder: '请输入真实名称',
        },
        {
          type: 'Input',
          label: '手机号',
          name: 'phone',
          required: true,
          placeholder: '请输入11位数字的手机号',
          rules: [
            () => ({
              validator(rule, value) {
                // 验证手机号
                // let regPhone = /^1[3456789]\d{9}$/;  // 1 3 713746864  ^首位字符是什么，$结束字符是什么  \d代表数字  11位手机号
                if (validate_phone(value)) {
                  return Promise.resolve()
                }
                return Promise.reject('手机号格式有误')
              },
            }),
          ],
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
      ],
    }
  }

  componentDidMount() {
    this.props.onRef(this)
  }

  onFormRef = (ref) => {
    this.child = ref
  }

  visibleModal = (status) => {
    this.setState({
      isModalVisible: status,
    })
  }

  handleOk = () => {
    this.child.onSubmit()
  }
  handleCancel = () => {
    //清除表单
    this.child.onReset()
    this.visibleModal(false)
  }
  submit = (value) => {
    const requestData = value
    requestData.password = CryptoJs.MD5(value.password).toString()
    delete requestData.passwords
    UserAdd(requestData).then((response) => {
      const responseData = response.data
      //提示
      message.info(responseData.message)
      //关闭弹窗
      this.handleCancel(false)
    })
  }

  render() {
    return (
      <Modal
        title="新增用户"
        visible={this.state.isModalVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={null}
      >
        <FormCom
          onRef={this.onFormRef}
          formItem={this.state.formItem}
          formLayout={this.state.formLayout}
          formConfig={this.state.formConfig}
          submit={this.submit}
          //   submitButton={false}
        ></FormCom>
      </Modal>
    )
  }
}
export default UserModal
