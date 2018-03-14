import React from 'react';
import {
  Route
} from 'react-router-dom';
import {
  Layout
} from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Users from './Users/index';
import Goods from './Goods/index';

const {
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
              <Route path="/users" component={Users} />
              <Route path="/goods" component={Goods} />
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
