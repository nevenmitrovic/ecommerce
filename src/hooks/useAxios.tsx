import { useState } from "react";

import axiosInstance from "@/services/apiClient";

type fetchMethod = "GET" | "POST" | "PUT" | "DELETE";

export const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async (url: string, method: fetchMethod, body?: any) => {
    setLoading(true);
    try {
      const response = await axiosInstance({
        url,
        method,
        data: body,
      });
      setData(response.data);
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, fetchData };
};
