import { useAxios } from "@/hooks/useAxios";

export interface ICategory {
  id: number;
  name: string;
  slug: string;
}
export interface IProductServiceResponse {
  count: number;
  data: ICategory[] | IBrand[];
}
export interface IBrand {
  id: number;
  name: string;
}

export function useProductsService() {
  const categoriesAxios = useAxios();
  const brandsAxios = useAxios();

  const getAllCategories = async () => {
    await categoriesAxios.fetchData("/categories", "GET");
  };

  const getAllBrands = async () => {
    await brandsAxios.fetchData("/brands", "GET");
  };

  return {
    categoriesLoading: categoriesAxios.loading,
    categories: categoriesAxios.data,
    brandsLoading: brandsAxios.loading,
    brands: brandsAxios.data,
    getAllCategories,
    getAllBrands,
  };
}
