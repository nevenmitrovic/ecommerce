import { useState } from "react";

import axiosInstance from "@/services/apiClient";

import type { IProductServiceResponse } from "@/services/productsService";

type fetchMethod = "GET" | "POST" | "PUT" | "DELETE";
type useAxiosData = null | IProductServiceResponse;

export const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<useAxiosData>(null);

  const fetchData = async (url: string, method: fetchMethod, body?: any) => {
    setLoading(true);
    try {
      const response = await axiosInstance({
        url,
        method,
        data: body,
      });
      setData(response.data);
    } catch (error) {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, fetchData };
};
