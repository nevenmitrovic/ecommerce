import axios from "axios";
import { setupInterceptorsTo } from "@/interceptors/interceptors";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

setupInterceptorsTo(axiosInstance);

export default axiosInstance;
