import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Menu,
  Icon
} from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const {
  Header,
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
          <Sidebar collapsed={this.state.collapsed}/>
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
