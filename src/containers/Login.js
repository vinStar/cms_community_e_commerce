import React from 'react';
import {
  Form,
  Input,
  Button,
  Checkbox
} from 'antd';
import Copyright from '../components/Copyright';
import {
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import logo from '../assets/images/logo.png';

const FormItem = Form.Item;

@Form.create()
export default class Login extends React.Component {
  static propTypes = {

  }

  render() {
    const {
      getFieldDecorator
    } = this.props.form

    return (
      <div className="page page-login vertical-align">
        <div className="page-content vertical-align-middle">
          <div className="brand">
            <img src={logo} alt="..."/>
            <h2 className="brand-text">
              云生活管理系统
            </h2>
          </div>
          <p>请登录您的账号</p>
          <Form style={{textAlign: 'left'}}>
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
                  reules: [{ required: true, message: '请输入密码!'}]
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
                getFieldDecorator('remeber', {
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
