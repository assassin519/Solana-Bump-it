import axios from "axios";


const baseURL = 'http://localhost:5000/api/v1';

export const instance = axios.create({ baseURL });

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //


instance.interceptors.request.use(
  (config) => {
    // Modify config object to set the header
    config.headers['Authorization'] = localStorage.getItem("token"); // Set your access token or any other header
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default instance;
