import React, { Component, Fragment } from 'react'
import './index.scss'
import { Form, Input, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import Code from '../../components/code/index'

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
  toggleForm = () => {
    this.props.switchForm('login')
  }
  render() {
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
                  { required: true, message: 'Please input your Username!' },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                name="passwords"
                rules={[
                  { required: true, message: 'Please input your Passwords!' },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Passwords"
                />
              </Form.Item>
              <Form.Item
                name="Code"
                rules={[{ required: true, message: 'Please input your Code!' }]}
              >
                <Row gutter={13}>
                  <Col span={15}>
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Code"
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