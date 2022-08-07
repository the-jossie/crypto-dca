import { AxiosInstance, AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import markets from './markets.json';
import plans from './plans.json';
import transactions from './transactions.json';

const initializeAxiosMockAdapter = (instance: AxiosInstance) => {
  const mock = new MockAdapter(instance, { delayResponse: 1000 });

  mock.onGet('plan/fetch_plans').reply(() => getItem('plans'));
  mock.onGet('markets/all_markets').reply(() => getItem('markets'));
  mock.onGet('transactions/transactions').reply(() => getItem('transactions'));

  mock.onPost('user/syncAccount').reply((config) => syncAccount(config));
  mock.onPost('user/authenticate').reply((config) => authenticate(config));
  mock.onPost('plan/create_plan').reply((config) => createDCAPlan(config));
};

export const getItem = (key: string) => {
  switch (key) {
    case 'plans':
      return [200, plans];

    case 'markets':
      return [200, markets];

    case 'transactions':
      return [200, transactions];

    default:
      break;
  }
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

const createDCAPlan = (config: AxiosRequestConfig<any>) => {
  const { name, market, amount, schedule } = JSON.parse(config.data);
  if (name.trim() && market.trim() && amount.trim() && schedule.trim()) {
    return [
      201,
      {
        msg: 'Plan successfully created.',
        data: {
          user: '62eafd14a0eghgg6218df8f23f38',
          market: {
            _id: '62ebcbf60afe0nnce3ce97e00b',
            name: 'btcngn',
            base_unit: 'btc',
            quote_unit: 'ngn',
            createdAt: '2022-08-04T13:39:02.115Z',
            updatedAt: '2022-08-04T13:39:02.115Z',
            __v: 0,
          },
          name: 'Buhari Lifestyle.',
          amount: 1,
          isActive: true,
          schedule: 'WEEKLY',
          _id: '62eef5cb76jj8720075378f9e6',
          createdAt: '2022-08-06T23:14:19.733Z',
          updatedAt: '2022-08-06T23:14:19.733Z',
          __v: 0,
        },
      },
    ];
  }
  return [500, { data: { msg: 'Server error.' } }];
};

export { initializeAxiosMockAdapter };
