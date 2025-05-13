import {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

import { notification } from "@/utils/globalUtils";

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
    if (error.response.status === 401) {
      notification("Unauthorized access, please log in again.", "error");
    } else if (error.response.status === 403) {
      notification("Forbidden access, you do not have permission.", "error");
    } else if (error.response.status === 404) {
      notification("Resource not found.", "error");
    } else if (error.response.status === 500) {
      notification("Server error, please try again later.", "error");
    } else {
      notification(`Error: ${error.response.status}`, "error");
    }
  } else if (error.request) {
    notification("No response from the server.", "error");
  } else {
    notification(`Error: ${error.message}`, "error");
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
