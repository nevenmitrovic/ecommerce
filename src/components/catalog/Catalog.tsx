import "./catalog.style.css";

import { useEffect } from "react";

import { useProductsService } from "@/services/productsService";

interface CatalogProps {
  show: boolean;
}

const Catalog = ({ show }: CatalogProps) => {
  const {
    categories,
    categoriesLoading,
    getAllCategories,
    brands,
    brandsLoading,
    getAllBrands,
  } = useProductsService();

  useEffect(() => {
    getAllCategories();
    getAllBrands();
  }, []);

  if (categoriesLoading || brandsLoading)
    return <div style={{ display: show ? "flex" : "none" }}>Loading...</div>;

  return (
    <div
      className="catalog-container"
      style={{ display: show ? "flex" : "none" }}
    >
      <section className="catalog-section">
        <h3>CATEGORIES</h3>
        <ul>
          {categories?.data.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </section>
      <section className="catalog-section">
        <h3>BRANDS</h3>
        <ul>
          {brands?.data.map((brand) => (
            <li key={brand.id}>{brand.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default Catalog;
