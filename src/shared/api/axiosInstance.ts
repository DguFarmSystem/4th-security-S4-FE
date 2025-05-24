import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fellow-myrilla-dohyunk58-781ebbd2.koyeb.app',
  timeout: 5000,
});