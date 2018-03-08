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
      <div className="page page-home">
        <Layout>
          <Sidebar collapsed={this.state.collapsed}/>
          <Layout>
            <Navbar
              collapsed={this.state.collapsed}
              handleClick={this.toggleCollapse}
            />
            <Content>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
