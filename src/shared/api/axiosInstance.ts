import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://memekly.koyeb.app',
  timeout: 5000,
});