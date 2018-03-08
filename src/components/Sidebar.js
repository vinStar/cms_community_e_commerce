import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Icon,
  Menu
} from 'antd'
import SidebarLogo from './SidebarLogo';

const {
  Sider
} = Layout

export default class Sidebar extends React.Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired
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
        >
          <Menu.Item key="1">
            <Icon type="user" />
            <span>user</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="product" />
            <span>user</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
