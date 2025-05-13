import "./catalog.style.css";

import { useEffect } from "react";
import { NavLink } from "react-router";

import { useProductsService } from "@/services/productsService";

interface CatalogProps {
  show: boolean;
}

const Catalog = ({ show }: CatalogProps) => {
  const { loading, data, getAllCategories } = useProductsService();

  useEffect(() => {
    getAllCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

  return (
    <div
      className="catalog-container"
      style={{ display: show ? "flex" : "none" }}
    >
      <section className="catalog-section">
        <h3>CATEGORIES</h3>
        <ul>
          {data?.data.map((category) => (
            <li key={category.id}>
              <NavLink to={`/${category.slug}`}>{category.name}</NavLink>
            </li>
          ))}
        </ul>
      </section>
      <section className="catalog-section">
        <h3>BRANDS</h3>
        <ul>
          <li>brand title</li>
          <li>brand title</li>
          <li>brand title</li>
        </ul>
      </section>
    </div>
  );
};
export default Catalog;
