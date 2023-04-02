import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

// Add a request interceptor to check for token before sending a request
instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to set token as cookie after receiving a response
instance.interceptors.response.use(
  (response) => {
    const token = response.headers["authorization"];
    if (token) {
      Cookies.set("token", token, { expires: 3 });
    }
    return response;
  },
  (error) => Promise.reject(error)
);

export default instance;
