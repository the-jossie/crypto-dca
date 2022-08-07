import { useQuery } from '@tanstack/react-query';

import { fetchTransactions } from '../../api';
import { Table } from '../../components';

const TransactionsTable = () => {
  const { isLoading, data } = useQuery(['transactions'], fetchTransactions);

  const formattedData = data?.transactions?.map((transaction: any) => ({
    ...transaction,
    total_amount: `${transaction?.total?.unit} ${transaction?.total?.amount}`,
    fee_amount: `${transaction?.fee?.unit} ${transaction?.fee?.amount}`,
    received_amount: `${transaction?.receive?.unit} ${transaction?.receive?.amount}`,
  }));

  return (
    <Table
      name="transactions"
      isLoading={isLoading}
      tableData={formattedData ?? []}
      id="My-Transactions"
    />
  );
};

export { TransactionsTable };
