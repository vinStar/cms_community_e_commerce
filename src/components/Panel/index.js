import React from 'react';
import Body from './Body';

export default class Panel extends React.Component {
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
