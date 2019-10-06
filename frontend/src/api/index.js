import axios from 'axios';
import qs from 'qs';
import serverUrl from '../configuration';

const config = {
  baseURL: serverUrl,
  transformRequest: [data => qs.stringify(data, { arrayFormat: 'brackets' })],
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'brackets' }),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  timeout: 100000,
  responseType: 'json',
  withCredentials: true,
};

const imageConfig = {
  baseURL: serverUrl,
  timeout: 100000,
  responseType: 'json',
  withCredentials: true,
};

// return data
axios.interceptors.response.use((res) => {
  console.log(res);
  return res.data;
});

export const get = (url, params = {}) => axios.get(url, { params, ...config });
export const post = (url, data = {}) => axios.post(url, data, config);
export const del = url => axios.delete(url, config);
export const patch = (url, data = {}) => axios.patch(url, data, config);
export const upload = (url, data) => axios.post(url, data, config);

// upload Image
/* class Socket {
  constructor() {
    this.socket = undefined;
    this.config = process.env.NODE_ENV === 'production'
      ? {} : { transports: ['websocket'], upgrade: false };
  }

  createSocket() {
    this.socket = io(
      'http://localhost:3002',
      this.config,
    );
  }

  uploadImage(data) {
    this.socket.emit('/image/upLoadImage', data);
  }
}
export const socket = new Socket(); */
