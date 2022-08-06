import { axiosInstance } from '../config';

const sync = async (body: Object) => {
  const { data } = await axiosInstance.post('user/syncAccount', body);
  return data;
};

export { sync };
