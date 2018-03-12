import React from 'react';

export default function Header({ children }) {
  const prefixCls = 'panel'
  const classes = `${prefixCls}-header`

  return (
    <header className={classes}>
      {children}
    </header>
  )
}
