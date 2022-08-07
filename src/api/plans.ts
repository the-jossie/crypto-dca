import { axiosInstance } from '../config';

const fetchPlans = async () => {
  const { data } = await axiosInstance.get('plan/fetch_plans');

  return data;
};

const createPlan = async (body: Object) => {
  const { data } = await axiosInstance.post('plan/create_plan', body);
  return data;
};

export { createPlan, fetchPlans };
