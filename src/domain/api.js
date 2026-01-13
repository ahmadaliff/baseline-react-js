import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const callAPI = async (endpoint, method, data = {}, iswithCredentials = false, header = {}, params = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
    withCredentials: iswithCredentials,
  };

  return request(options).then((response) => response.data);
};

// refresh token
export const apiRefreshToken = () => callAPI(`auth/refresh`, 'get', {}, true);

// home
export const apiGetData = (data) => callAPI(`/data`, 'post', data);
