import React from 'react';
import {
  WEBSITE_NAME
} from '../constants';
import logo from '../assets/images/logo.png';

const SidebarLogo = () => {
  return (
    <div className="sidebar-logo">
      <img src={logo} alt="..."/>
      {WEBSITE_NAME}
    </div>
  )
}

export default SidebarLogo
