import { useQuery } from '@tanstack/react-query';

import { Table } from '../../components';
import { fetchAllTransactions, fetchPlanTransactions } from '../../api';
import { capitalize } from '../../utils';

const TransactionsTable = ({ id }: IProps) => {
  const { isLoading, data } = useQuery(['transactions'], () =>
    id ? fetchPlanTransactions(id) : fetchAllTransactions()
  );

  const formattedData = data?.transactions?.map((transaction: any) => ({
    ...transaction,
    total_amount: `${transaction?.total?.unit} ${Number(transaction?.total?.amount)?.toFixed(2)}`,
    fee_amount: `${transaction?.fee?.unit} ${Number(transaction?.fee?.amount)?.toFixed(10)}`,
    received_amount: `${transaction?.receive?.unit} ${Number(transaction?.receive?.amount)?.toFixed(
      10
    )}`,
    status: (
      <span
        className={`text-white py-1 px-3 rounded font-bold text-md ${
          transaction?.status === 'done'
            ? 'bg-green-400'
            : transaction?.status === 'error'
            ? 'bg-red-400'
            : transaction?.status === 'confirm'
            ? 'bg-blue-300'
            : 'bg-gray-400'
        }`}>
        {capitalize(transaction?.status)}
      </span>
    ),
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
  id?: string;
}

export { TransactionsTable };
