import './dashboard.scss';

import { useContext, useState } from 'react';

import { Navbar, PageHeader, Tabs } from '../../components';
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
        <PageHeader title={activeTab} showBtn={true} />
        <Tabs options={tabs} {...{ activeTab }} {...{ setActiveTab }} />
        {activeTab === 'My Plans' && <PlansTable />}
        {activeTab === 'My Transactions' && <TransactionsTable />}
      </div>
      {!userAccountIsSynced && <SyncPage />}
    </div>
  );
};

export { DashboardPage };
