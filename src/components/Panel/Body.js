import React from 'react';

export default function Body({ children }) {
  const prefixCls = 'panel'
  const classes = `${prefixCls}-body`

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
