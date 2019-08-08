import axios from 'axios';
import { NODE } from './constants/data';

export const getRequest = (request, data) => {
  return axios.get(`${NODE}/nxt?requestType=${request}${data}`, { responseType: 'json' });
}

export const postRequest = (request, data) => {
  return axios.post(`${NODE}/nxt?requestType=${request}`, data)
}