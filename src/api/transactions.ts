import { axiosInstance } from '../config';

const fetchTransactions = async (id: string | undefined) => {
  const { data } = await axiosInstance.get(`transaction/transactions/${id}`);
  return data;
};

export { fetchTransactions };
