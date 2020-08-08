import axios from 'axios';
import { baseApiURL } from '../constants';

/**
 * Axios config with API base URL
 */
const api = axios.create({
  baseURL: baseApiURL
});

export default api;
