import { axiosInstance } from '../config';

const fetchPlanTransactions = async (id: string | undefined) => {
  const { data } = await axiosInstance.get(`transaction/transactions/${id}`);
  return data;
};

const fetchAllTransactions = async () => {
  const { data } = await axiosInstance.get(`transaction`);
  return data;
};

export { fetchAllTransactions, fetchPlanTransactions };
