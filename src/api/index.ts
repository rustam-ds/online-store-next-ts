import axios from 'axios';
import { BASE_URL } from 'src/config';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  },
);
