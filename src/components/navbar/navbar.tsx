import './navbar.scss';

import React from 'react';

import { CaretDownIcon, NotificationIcon } from '../vectors';

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1 className="logo">
        DCA <span>CORE</span>
      </h1>

      <div className="info-side">
        <NotificationIcon />
        <div className="avatar-box">UN</div>
        <p className="user-name">User...name</p>
        <CaretDownIcon />
      </div>
    </div>
  );
};

export { Navbar };
