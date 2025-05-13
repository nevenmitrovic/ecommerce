import { useAxios } from "@/hooks/useAxios";

export interface Category {
  id: number;
  name: string;
  slug: string;
}
export interface IGetAllCategoriesResponse {
  count: number;
  data: Category[];
}

export function useProductsService() {
  const { loading, data, fetchData } = useAxios();

  const getAllCategories = async () => {
    await fetchData("/categories", "GET");
  };

  return {
    loading,
    data,
    getAllCategories,
  };
}
