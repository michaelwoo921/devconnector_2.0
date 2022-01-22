import axios from 'axios';

const api = axios.create({
  baseURL: '/api',

  headers: { Authorization: `Bearer ${localStorage.token}` },
});

api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;

export default api;
