import axios from 'axios';
import { toast } from 'react-toastify';
import { APP_NAME } from './app';
import { initializeAxiosMockAdapter } from '../mocks/api';

const APIURL = 'https://dca-core-backend.herokuapp.com/api/';
const API_MOCK_ENABLED = false;

const getToken = () => {
  const store = JSON.parse(sessionStorage.getItem(APP_NAME));

  const apiToken = store && store.token;
  return apiToken ? `Bearer ${apiToken}` : '';
};

const axiosInstance = axios.create({
  baseURL: APIURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getToken(),
    Accept: '*/*',
  },
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      sessionStorage.clear();
      toast.error('Session expired. Please sync account.');
    }
    return Promise.reject(error);
  }
);

if (API_MOCK_ENABLED) {
  initializeAxiosMockAdapter(axiosInstance);
}

export { axiosInstance };
