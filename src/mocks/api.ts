import { AxiosInstance, AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import user from './user.json';

const initializeAxiosMockAdapter = (instance: AxiosInstance) => {
  const mock = new MockAdapter(instance, { delayResponse: 1000 });

  mock.onPost('user/syncAccount').reply((config) => syncAccount(config));
  mock.onPost('user/authenticate').reply((config) => authenticate(config));
};

const testToken = 'test-jwt-token';

const syncAccount = (config: AxiosRequestConfig<any>) => {
  const { secretKey } = JSON.parse(config.data);
  if (secretKey.trim()) {
    return [
      201,
      {
        data: {
          message:
            'User account has been synced, kindly sign in with the email tethered the api key.',
        },
      },
    ];
  }
  return [500, { data: { msg: 'Error in sync: Server error.' } }];
};

const authenticate = (config: AxiosRequestConfig<any>) => {
  const { code } = JSON.parse(config.data);
  if (code.trim()) {
    return [
      200,
      {
        data: {
          message: 'Account synced.',
          user: {
            name: 'Oye Olalekan',
            email: 'johnsonoye123@gmail.com',
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWFmZDE0YTBlNjIxOGRmOGYyM2YzOCIsImlhdCI6MTY1OTgxMjY5NiwiZXhwIjoxNjYyNDA0Njk2fQ.nWWMWABCkCM4qLzMgxBGIpEH9FBqK55YU76KLx-c38E',
          },
        },
      },
    ];
  }
  return [400, { message: 'This account does not exit.' }];
};
export { initializeAxiosMockAdapter };
