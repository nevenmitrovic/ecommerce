import axios from "axios";
import { setupInterceptorsTo } from "@/interceptors/interceptors";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

setupInterceptorsTo(axiosInstance);

export default axiosInstance;
