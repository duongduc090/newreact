import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Content-Type': 'multipart/form-data',
  }

});
export const axiosClient2 = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Content-Type': 'application/json',
  }
});