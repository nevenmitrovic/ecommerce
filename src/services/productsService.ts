import { useAxios } from "@/hooks/useAxios";

export interface ICategory {
  id: number;
  name: string;
  slug: string;
}

export interface IBrand {
  id: number;
  name: string;
}

export interface IProduct {
  id: number;
  best_seller: boolean;
  in_stock: boolean;
  features: any[];
  images: any[];
  sku: number;
  name: string;
  category: ICategory;
  brand: IBrand;
  regular_price: number;
  sale_price: number;
  reviews_quantity: number;
  reviews_average: number;
  description: string;
  specs: any[];
  slug: string;
}

export interface IProductServiceResponse<T> {
  count: number;
  data: T[];
}

export function useProductsService() {
  const apiClient = useAxios();

  const getAllCategories = async (): Promise<
    IProductServiceResponse<ICategory>
  > => {
    const response = await apiClient.fetchData("/categories", "GET");
    return response;
  };

  const getAllBrands = async (): Promise<IProductServiceResponse<IBrand>> => {
    const response = await apiClient.fetchData("/brands", "GET");
    return response;
  };

  const getAllProductsFromCategory = async (
    categoryId: number
  ): Promise<IProductServiceResponse<IProduct>> => {
    const response = await apiClient.fetchData(
      `/categories/${categoryId}/products`,
      "GET"
    );
    return response;
  };

  const getAllProductsFromBrand = async (
    brandId: number
  ): Promise<IProductServiceResponse<IProduct>> => {
    const response = await apiClient.fetchData(
      `/brands/${brandId}/products`,
      "GET"
    );
    return response;
  };

  return {
    loading: apiClient.loading,
    getAllCategories,
    getAllBrands,
    getAllProductsFromCategory,
    getAllProductsFromBrand,
  };
}
