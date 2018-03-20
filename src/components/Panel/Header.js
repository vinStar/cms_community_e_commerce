import React from 'react';

export default function Header(props) {
  const {
    children,
    ...otherProps
  } = props
  const prefixCls = 'panel'
  const classes = `${prefixCls}-header`

  return (
    <header className={classes} {...otherProps}>
      {children}
    </header>
  )
}
