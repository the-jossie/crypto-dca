import { axiosInstance } from '../config';

const authenticate = async (body: Object) => {
  const { data } = await axiosInstance.post('user/authenticate', body);
  console.log('first', data);
  return data;
};

export { authenticate };
