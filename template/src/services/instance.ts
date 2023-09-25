import axios from 'axios';

export const instance = axios.create({
  baseURL: `${process.env.API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
