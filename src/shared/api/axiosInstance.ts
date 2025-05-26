import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://memekly.koyeb.app',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});