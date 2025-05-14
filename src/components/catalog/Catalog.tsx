import "./catalog.style.css";

import { useEffect, useState } from "react";
import { NavLink } from "react-router";

import {
  useProductsService,
  type ICategory,
  type IBrand,
} from "@/services/productsService";

interface CatalogProps {
  show: boolean;
}

const Catalog = ({ show }: CatalogProps) => {
  const { loading, getAllCategories, getAllBrands } = useProductsService();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [brands, setBrands] = useState<IBrand[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesResponse = await getAllCategories();
      if (categoriesResponse) {
        setCategories(categoriesResponse.data);
      }
    };
    const fetchBrands = async () => {
      const brandsResponse = await getAllBrands();
      if (brandsResponse) {
        setBrands(brandsResponse.data);
      }
    };

    fetchCategories();
    fetchBrands();
  }, []);

  if (loading)
    return <div style={{ display: show ? "flex" : "none" }}>Loading...</div>;

  return (
    <div
      className="catalog-container"
      style={{ display: show ? "flex" : "none" }}
    >
      <section className="catalog-section">
        <h3>CATEGORIES</h3>
        <ul>
          {categories?.map((category) => (
            <li key={category.id}>
              <NavLink to={`/catalog/category/${category.id}/products`}>
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
      <section className="catalog-section">
        <h3>BRANDS</h3>
        <ul>
          {brands?.map((brand) => (
            <li key={brand.id}>
              <NavLink to={`/catalog/brand/${brand.id}/products`}>
                {brand.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default Catalog;
