import axios from 'axios';

const APP_URL = 'http://localhost:81';

export const apiHandler = axios.create({
  baseURL: `${APP_URL}/api/v1`,
});
