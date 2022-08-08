import './dashboard.scss';

import { useContext } from 'react';

import { Navbar } from '../../components';
import { PlansTable } from './plans-table';
import { SyncPage } from '../sync';
import { UserContext } from '../../contexts';

const DashboardPage = () => {
  const { userAccountIsSynced }: any = useContext(UserContext);

  return (
    <div className="Dashboard">
      <Navbar />
      <div className="PageSection">
        <PlansTable />
      </div>
      {!userAccountIsSynced && <SyncPage />}
    </div>
  );
};

export { DashboardPage };
