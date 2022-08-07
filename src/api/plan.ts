import { axiosInstance } from '../config';

const fetchPlans = async () => {
  const { data } = await axiosInstance.get('plan/fetch_plans');

  return data;
};

const createPlan = async (body: Object) => {
  const { data } = await axiosInstance.post('plan/create_plan', body);
  return data;
};

const editPlan = async (body: any) => {
  const id = body.id;
  delete body.id;

  const { data } = await axiosInstance.put(`plan/edit_plan/${id}`, body);
  return data;
};

const togglePlan = async (body: any) => {
  const id = body.id;
  delete body.id;

  const { data } = await axiosInstance.patch(`plan/toggle_plan/${id}`, body);
  return data;
};

export { createPlan, editPlan, fetchPlans, togglePlan };
