import React from 'react';
import classNames from 'classnames';
import {
  AUTHOR,
  GITHUB
} from '../constants';

export default function Copyright({ className }) {
  const classes = classNames('page-copyright', className);
  return (
    <footer className={classes}>
      <p>
        WEBSITE BY {AUTHOR}
      </p>
      <p>
        &copy; 2018. ALL RIGHT RESERVED.
      </p>
    </footer>
  )
}
