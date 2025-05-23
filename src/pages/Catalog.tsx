import { useParams } from "react-router";
import { useEffect, useState } from "react";

import PageHeader from "@/components/catalog-page/header/PageHeader";
import Navbar from "@/components/common/navbar/Navbar";
import SortingControl from "@/components/catalog-page/sorting-control/SortingControl";
import ProductsContainer from "@/components/catalog-page/products/ProductsContainer";

import { useProductsService, type IProduct } from "@/services/productsService";

const Catalog = () => {
  const { unit, id } = useParams();
  const { loading, getAllProductsFromCategory, getAllProductsFromBrand } =
    useProductsService();
  const [products, setProducts] = useState<null | IProduct[]>(null);

  useEffect(() => {
    const fetchProducts = async (id: string) => {
      if (unit === "category") {
        const res = await getAllProductsFromCategory(id);
        if (res) setProducts(res.data);
      } else {
        const res = await getAllProductsFromBrand(id);
        if (res) setProducts(res.data);
      }
    };

    if (id) fetchProducts(id);
  }, [unit, id]);

  if (loading) return <div>loading products...</div>;

  return (
    <>
      <Navbar />
      <PageHeader unit={unit} />
      <SortingControl unit={unit} />
      <ProductsContainer data={products} />
    </>
  );
};

export default Catalog;
