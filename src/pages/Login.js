import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

export default class Login extends React.Component {
  static defaultProps = {
    prefixCls: 'yu'
  }

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    const {
      prefixCls
    } = this.props

    const classes = classNames(`${prefixCls}-login`)

    return (
      <div className={classes}>
        login
      </div>
    )
  }
}
