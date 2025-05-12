import axios from "axios";
import { getCookie } from "./cookie";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("accessToken");

    if (!accessToken) {
      if (config.headers) {
        config.headers.accessToken = null;
      }
    }

    if (config.headers && accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return error;
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      return status;
    }
  }
);

export default instance;
