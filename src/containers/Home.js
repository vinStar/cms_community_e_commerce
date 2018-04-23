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
import CategoryFirst from './CategoryFirst/index';
import Orders from './Orders/index';
import Dashboard from './Dashboard/index';
import Advs from './Advs/index';
import CategorySecond from './CategorySecond/index';

export default class Home extends React.Component {
  state = {
    collapsed: false
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
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
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/users" component={Users} />
            <Route path="/goods" component={Goods} />
            <Route path="/category/first" component={CategoryFirst} />
            <Route path="/category/second" component={CategorySecond} />
            <Route path="/orders" component={Orders} />
            <Route path="/advertisments" component={Advs} />
          </Layout>
        </Layout>
      </div>
    )
  }
}
