import axios from 'axios';
const token = localStorage.token;
let api;

if (!token) {
  api = axios.create({
    baseURL: '/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });
} else {
  api = axios.create({
    baseURL: '/api',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export default api;
