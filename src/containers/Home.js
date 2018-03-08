import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  Layout
} from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import User from './User';

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
              <Router>
                <Switch>
                  <Route path="/user" component={User} />
                </Switch>
              </Router>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
