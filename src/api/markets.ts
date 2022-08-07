import { axiosInstance } from '../config';

const fetchMarkets = async () => {
  const { data } = await axiosInstance.get('markets/all_markets');

  return data;
};

export { fetchMarkets };
