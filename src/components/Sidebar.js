import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Layout,
  Icon,
  Menu
} from 'antd'
import SidebarLogo from './SidebarLogo';

const {
  Sider
} = Layout
const {
  SubMenu
} = Menu

export default class Sidebar extends React.Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired
  }

  state = {
    current: '1'
  }

  handleClick = (e) => {
    const key = e.key
    this.setState({
      current: key
    })
  }

  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <SidebarLogo />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={this.handleClick}
        >
          <Menu.Item key="1">
            <Link to="users">
              <Icon type="user" />
              <span>用户信息管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="goods">
              <Icon type="table" />
              <span>商品信息管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="categories">
              <Icon type="tags-o" />
              <span>商品分类管理</span>
            </Link>
          </Menu.Item>
          <SubMenu title={<span><Icon type="profile" />订单信息管理</span>}>
            <Menu.Item key="4">
              <Link to="orders">
                <span>订单查询</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="orders">
                <span>发货处理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="orders">
                <span>退款处理</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="7">
            <Link to="advertisments">
              <Icon type="switcher" />
              <span>广告信息管理</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
