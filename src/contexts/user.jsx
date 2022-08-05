import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

import { useSessionStorage } from '../hooks';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [store] = useSessionStorage('dca', '');
  let { userData } = store;
  const [user, setUser] = useState(userData || {});
  const userAccountIsSynced = Boolean(user?.token);

  return (
    <UserContext.Provider value={{ user, setUser, userAccountIsSynced }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

UserProvider.propTypes = {
  children: PropTypes.node,
};
