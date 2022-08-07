import './dashboard.scss';

import { useContext, useState } from 'react';

import { Navbar, Tabs } from '../../components';
import { PageHeader } from './page-header';
import { PlansTable } from './plans-table';
import { SyncPage } from '../sync';
import { UserContext } from '../../contexts';
import { TransactionsTable } from './transactions-table';

const DashboardPage = () => {
  const { userAccountIsSynced }: any = useContext(UserContext);

  const tabs = ['My Plans', 'My Transactions'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="Dashboard">
      <Navbar />
      <div className="PageSection">
        <PageHeader />
        <Tabs options={tabs} {...{ activeTab }} {...{ setActiveTab }} />
        {activeTab === tabs[0] && <PlansTable />}
        {activeTab === tabs[1] && <TransactionsTable />}
      </div>
      {!userAccountIsSynced && <SyncPage />}
    </div>
  );
};

export { DashboardPage };
