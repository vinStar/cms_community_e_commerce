import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Menu,
  Icon
} from 'antd';
import Navbar from '../components/Navbar';
import SidebarLogo from '../components/SidebarLogo';

const {
  Sider,
  Header,
  Content
} = Layout

export default class Home extends React.Component {
  state = {
    collapsed: false
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="page">
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
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
          <Header>
            <Icon
              className="trigger"
              type={this.setState.collapsed ? 'menu-unfold': 'menu-fold'}
              onClick={this.toggleCollapse}
            />
            <Navbar />
          </Header>
        </Layout>
      </div>
    )
  }
}
