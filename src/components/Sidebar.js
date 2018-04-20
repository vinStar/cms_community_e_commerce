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
  Item,
  SubMenu
} = Menu

export default class Sidebar extends React.Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired
  }

  state = {
    current: '0'
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
          defaultSelectedKeys={["0"]}
          onClick={this.handleClick}
        >
          <Item key="0">
            <Link to="/dashboard">
              <Icon type="dashboard" />
              <span>主页</span>
            </Link>
          </Item>
          <Item key="1">
            <Link to="users">
              <Icon type="user" />
              <span>用户信息管理</span>
            </Link>
          </Item>
          <Item key="2">
            <Link to="goods">
              <Icon type="table" />
              <span>商品信息管理</span>
            </Link>
          </Item>
          <Item key="3">
            <Link to="categories">
              <Icon type="tags-o" />
              <span>商品分类管理</span>
            </Link>
          </Item>
          <SubMenu title={<span><Icon type="profile" />订单信息管理</span>}>
            <Item key="4">
              <Link to="orders">
                <span>订单查询</span>
              </Link>
            </Item>
            <Item key="5">
              <Link to="orders">
                <span>发货处理</span>
              </Link>
            </Item>
            <Item key="6">
              <Link to="orders">
                <span>退款处理</span>
              </Link>
            </Item>
          </SubMenu>
          <SubMenu title={<span><Icon type="switcher" />广告信息管理</span>}>
            <Item key="7">
              <Link to="advertisments">
                <span>滑动广告</span>
              </Link>
            </Item>
            <Item key="8">
              <Link to="adv_category">
                <span>推荐分类</span>
              </Link>
            </Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}
