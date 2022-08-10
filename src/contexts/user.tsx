import PropTypes from 'prop-types';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { APP_NAME } from '../config/app';

import { useSessionStorage } from '../hooks';

type IUSERCONTEXT = {
  user: any;
  setUser: Function;
  userAccountIsSynced: boolean;
  setUserAccountIsSynced: Function;
} | null;

const UserContext = createContext<IUSERCONTEXT>(null);

interface IProps {
  children: ReactNode;
}

const UserProvider = ({ children }: IProps) => {
  const [store] = useSessionStorage(APP_NAME, '');
  let { userData, token } = store;
  const [user, setUser] = useState(userData || {});
  const [userAccountIsSynced, setUserAccountIsSynced] = useState(Boolean(token));

  useEffect(() => {
    setUserAccountIsSynced(Boolean(store.token));
  }, [store]);

  return (
    <UserContext.Provider value={{ user, setUser, userAccountIsSynced, setUserAccountIsSynced }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

UserProvider.propTypes = {
  children: PropTypes.node,
};
