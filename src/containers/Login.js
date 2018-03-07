import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/authActions';
import {
  Form,
  Input,
  Button,
  Checkbox
} from 'antd';
import Copyright from '../components/Copyright';
import {
  Redirect,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import logo from '../assets/images/logo.png';
import * as storage from '../utils/storage';
import {
  TOKEN,
  USER_ID,
  USERNAME,
  PASSWORD
} from '../constants';

const FormItem = Form.Item;

@connect(
  (state) => ({
    error: state.auth.error,
    isAuthenticated: state.auth.isAuthenticated
  }),
  actions
)
@Form.create()
export default class Login extends React.Component {
  static state = {
    token: '',
    userId: ''
  }

  static propTypes = {
    error: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  }

  componentDidMount() {
    const token = storage.getStorage(TOKEN)
    const userId = storage.getStorage(USER_ID)
    console.log(token)
    console.log(userId)
    this.setState({
      token,
      userId
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values.username, values.password)
        if (values.remember === true) {
          storage.setStorage(USERNAME, values.username)
          storage.setStorage(PASSWORD, values.password)
        }
      }
    })
  }

  renderHtml() {
    const {
      getFieldDecorator
    } = this.props.form

    return (
      <div className="page page-login vertical-align">
        <div className="page-content vertical-align-middle">
          <div className="brand">
            <img src={logo} alt="..."/>
            <h2 className="brand-text">
              云生活超市
            </h2>
          </div>
          <p>请使用您的账号密码登录系统</p>
          <Form
            style={{textAlign: 'left'}}
            onSubmit={this.handleSubmit}
          >
            <FormItem>
              {
                getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入您的账号!'}]
                })(
                  <Input
                    placeholder="账号"
                  />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!'}]
                })(
                  <Input
                    type="password"
                    placeholder="密码"
                  />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Checkbox style={{color: '#fff'}}>记住密码</Checkbox>
                )
              }
              <a className="login-form-forgot">
                忘记密码？
              </a>
              <Button
                className="btn-login"
                type="primary"
                htmlType="submit"
              >
                登录
              </Button>
            </FormItem>
          </Form>
          <p>
          您还未注册？请 <a href="">注册</a>
          </p>
          <Copyright className="page-copyright-inverse" />
        </div>
      </div>
    )
  }

  render() {
    const {
      isAuthenticated,
      form
    } = this.props

    const {
      getFieldDecorator
    } = form

    return  (isAuthenticated) ? (
        <Redirect
          to={{
            pathname: '/success',
            form: {
              from: this.props.location
            }
          }}
        />
      ) : (
        <div className="page page-login vertical-align">
          <div className="page-content vertical-align-middle">
            <div className="brand">
              <img src={logo} alt="..."/>
              <h2 className="brand-text">
                云生活超市
              </h2>
            </div>
            <p>请使用您的账号密码登录系统</p>
            <Form
              style={{textAlign: 'left'}}
              onSubmit={this.handleSubmit}
            >
              <FormItem>
                {
                  getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入您的账号!'}]
                  })(
                    <Input
                      placeholder="账号"
                    />
                  )
                }
              </FormItem>
              <FormItem>
                {
                  getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码!'}]
                  })(
                    <Input
                      type="password"
                      placeholder="密码"
                    />
                  )
                }
              </FormItem>
              <FormItem>
                {
                  getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true
                  })(
                    <Checkbox style={{color: '#fff'}}>记住密码</Checkbox>
                  )
                }
                <a className="login-form-forgot">
                  忘记密码？
                </a>
                <Button
                  className="btn-login"
                  type="primary"
                  htmlType="submit"
                >
                  登录
                </Button>
              </FormItem>
            </Form>
            <p>
            您还未注册？请 <a href="">注册</a>
            </p>
            <Copyright className="page-copyright-inverse" />
          </div>
        </div>
      )
  }
}
