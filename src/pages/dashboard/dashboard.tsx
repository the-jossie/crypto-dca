import './dashboard.scss';

import { useContext, useState } from 'react';

import { Navbar, Tabs } from '../../components';
import { PageHeader } from './page-header';
import { PlansTable } from './PlansTable';
import { SyncPage } from '../sync';
import { UserContext } from '../../contexts';
import { useQuery } from '@tanstack/react-query';
import { fetchPlans } from '../../api';

const DashboardPage = () => {
  const { userAccountIsSynced }: any = useContext(UserContext);
  const tabs = ['My Plans', 'My Transactions'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const tableHeadings = [
    { name: 'Amount', key: 'amount' },
    { name: 'Name', key: 'name' },
    { name: 'Schedule', key: 'schedule' },
    { name: 'Creation Date & Time', key: 'createdAt' },
  ];
  const [tableData, setTableData] = useState(
    Array(1)
      .fill({
        amount: '5',
        name: 'Leaving the trenches.',
        creation: '02/05/2021 5:29pm',
        schedule: 'DAILY',
        isActive: true,
        _id: Math.random().toString(),
      })
      .map((data) => ({ ...data, _id: Math.random().toString() }))
  );

  const { isLoading, isError, data, error } = useQuery(['plans'], fetchPlans);

  return (
    <div className="Dashboard">
      <Navbar />
      <div className="PageSection">
        <PageHeader {...{ tableData }} {...{ setTableData }} />
        <Tabs options={tabs} {...{ activeTab }} {...{ setActiveTab }} />
        <PlansTable {...{ tableHeadings }} tableData={data?.plans} {...{ setTableData }} />
      </div>
      {!userAccountIsSynced && <SyncPage />}
    </div>
  );
};
export { DashboardPage };
