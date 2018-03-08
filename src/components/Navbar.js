import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Icon
} from 'antd';
const { Header } = Layout;

export default class Navbar extends React.Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <Header>
        <nav className="navbar">
          <ul className="nav">
            <li className="nav-item">
              <Icon
                className="sidebar-trigger"
                type={this.props.collapsed ? 'menu-unfold': 'menu-fold'}
                onClick={this.props.handleClick}
              />
            </li>
          </ul>
        </nav>
      </Header>
    )
  }
}
