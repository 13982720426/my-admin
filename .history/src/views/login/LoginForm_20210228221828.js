import React, { Component, Fragment } from 'react'
import './index.scss'
import { Form, Input, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

//验证
import { validate_password } from '../../utils/validate'

//API
import { Login, GetCode } from '../../api/account'

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
    }
  }

  //登录
  onFinish = (values) => {
    Login()
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {})
    console.log('Received values of form: ', values)
  }
  //获取验证码
  getCode = () => {
    const requestData = {
      username: '',
      module: 'login',
    }
    GetCode(requestData)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  //输入处理
  inputChange = (e) => {
    let value = e.target.value
    console.log(value)
  }

  toggleForm = () => {
    this.props.switchForm('register')
  }

  render() {
    const { username } = this.state

    return (
      <Fragment>
        <div className="form-header">
          <h4 className="column">登录</h4>
          <span onClick={this.toggleForm}>账号注册</span>

          <div className="form-content">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: '邮箱不能为空' },
                  {
                    type: 'email',
                    message: '邮箱格式不正确',
                  },
                ]}
              >
                <Input
                  value={username}
                  onChange={this.inputChange}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: '密码不能为空' },
                  //   ({ getFieldValue }) => ({
                  //     validator(_, value) {
                  //       if (value.length < 6) {
                  //         return Promise.reject('密码不能小于6位')
                  //       } else {
                  //         return Promise.resolve()
                  //       }
                  //     },
                  //   }),

                  //   { min: 6, message: '密码不能小于6位' },
                  //   { max: 20, message: '密码不能大于20位' },
                  {
                    pattern: validate_password,
                    message: '字母+数字，大于6位，小于20位',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="字母+数字，大于6位，小于20位"
                />
              </Form.Item>
              <Form.Item
                name="Code"
                rules={[
                  { required: true, message: '验证码不能为空' },
                  {
                    len: 6,
                    message: '请输入长度为六位的验证码',
                  },
                ]}
              >
                <Row gutter={13}>
                  <Col span={15}>
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Code"
                    />
                  </Col>
                  <Col span={9}>
                    {/* //后端验证码接口应该没有部署 暂时不能获取验证码 */}
                    {/* <Button type="danger" block onClick={this.getCode}>
                      获取验证码
                    </Button> */}
                    <Button type="danger" block>
                      获取验证码
                    </Button>
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
                  <div>登录</div>
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default LoginForm
