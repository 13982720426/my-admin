import React, { Component, Fragment } from 'react'
import './index.scss'
import { Form, Input, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import Code from '../../components/code/index'
import { validate_pass, validate_password } from '../../utils/validate'
import Password from 'antd/lib/input/Password'

class RegisterForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
    }
  }

  onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  //输入处理
  inputChange = (e) => {
    let value = e.target.value
    this.setState({
      username: value,
    })
  }

  toggleForm = () => {
    this.props.switchForm('login')
  }
  render() {
    const { username } = this.state

    return (
      <Fragment>
        <div className="form-header">
          <h4 className="column">注册</h4>
          <span onClick={this.toggleForm}>账号登录</span>
          <div className="form-content">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={() => this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: '邮箱不能为空！！' },
                  {
                    type: 'email',
                    message: '邮箱格式不正确',
                  },
                ]}
              >
                <Input
                  onChange={this.inputChange}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入邮箱"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: '密码不能为空' },
                  ({ getFieldValue }) => ({
                    validator(role, value) {
                      if (!validate_pass(value)) {
                        return Promise.reject(
                          '请输入字母+数字，大于6位，小于20位'
                        )
                      }
                      return Promise.resolve()
                    },
                  }),
                ]}
              >
                <Input
                  type="password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="请输入密码"
                />
              </Form.Item>
              <Form.Item
                name="passwords"
                rules={[
                  { required: true, message: '请再次输入密码' },
                  ({ getFieldValue }) => ({
                    validator(role, value) {
                      console.log(getFieldValue('Password'))
                      if (!validate_pass(value)) {
                        return Promise.reject(
                          '请输入字母+数字，大于6位，小于20位'
                        )
                      }
                      return Promise.resolve()
                    },
                  }),
                ]}
              >
                <Input
                  type="password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="两次密码不一致！！"
                />
              </Form.Item>
              <Form.Item
                name="Code"
                rules={[{ required: true, message: '请输入验证码！！' }]}
              >
                <Row gutter={13}>
                  <Col span={15}>
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="请输入验证码"
                    />
                  </Col>
                  <Col span={9}>
                    <Code username={username} />
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block
                >
                  <div>注册</div>
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default RegisterForm