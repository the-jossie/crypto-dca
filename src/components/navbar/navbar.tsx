import './navbar.scss';

import { useContext } from 'react';

import { CaretDownIcon, NotificationIcon } from '../vectors';
import { UserContext } from '../../contexts';

const Navbar = () => {
  const { user }: any = useContext(UserContext);

  return (
    <div className="Navbar">
      <h1 className="logo">
        DCA <span>CORE</span>
      </h1>

      <div className="info-side">
        <div className="avatar-box">{user?.name?.slice(0, 1)}</div>
        <div className="flex items-center cursor-pointer">
          <p className="user-name">{user?.name}</p>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
