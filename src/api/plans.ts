import { axiosInstance } from '../config';

const fetchPlans = async () => {
  const { data } = await axiosInstance.get('plan/fetch_plans');

  return data;
};

export { fetchPlans };
