import { axiosInstance } from '../config';

const fetchTransactions = async () => {
  const { data } = await axiosInstance.get('transaction/transactions/62ebd27c29f56a4b42539c66');
  return data;
};

export { fetchTransactions };
