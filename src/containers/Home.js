import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';

export default class Home extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="page">
        <Navbar />
      </div>
    )
  }
}
