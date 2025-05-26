import axios from 'axios';

export const api = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});