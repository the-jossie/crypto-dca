import { useQuery } from '@tanstack/react-query';

import { Table } from '../../components';
import { fetchTransactions } from '../../api';

const TransactionsTable = ({ id }: IProps) => {
  const { isLoading, data } = useQuery(['transactions'], () => fetchTransactions(id));

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

interface IProps {
  id: string;
}

export { TransactionsTable };
