import { axiosInstance } from '../config';

const authenticate = async (body: Object) => {
  const { data } = await axiosInstance.post('user/authenticate', body);
  return data;
};

export { authenticate };
