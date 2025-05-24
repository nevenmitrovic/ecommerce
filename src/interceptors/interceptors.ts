import {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

const onRequest = (config: AxiosRequestConfig): InternalAxiosRequestConfig => {
  return config as InternalAxiosRequestConfig;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (error.response) {
    // add toast
    if (error.response.status === 401) {
      console.error("Unauthorized access:", error.response.data);
    } else if (error.response.status === 403) {
      console.error("Forbidden access:", error.response.data);
    } else if (error.response.status === 404) {
      console.error("Resource not found:", error.response.data);
    } else if (error.response.status === 500) {
      console.error("Server error:", error.response.data);
    } else {
      console.error("Error response:", error.response.data);
    }
  } else if (error.request) {
    console.error("No response:", error.request);
  } else {
    console.error("Error message:", error.message);
  }
  return Promise.reject(error);
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
