import React from 'react';
import Header from './Header';
import Body from './Body';

export default class Panel extends React.Component {
  static Header = Header
  static Body = Body

  static defaultProps = {
    prefixCls: 'panel'
  }

  render() {
    const {
      prefixCls,
      children
    } = this.props

    return (
      <div className={prefixCls}>
        {children}
      </div>
    )
  }
}
