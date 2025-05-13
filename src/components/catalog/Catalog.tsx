import "./catalog.style.css";

interface CatalogProps {
  show: boolean;
}

const Catalog = ({ show }: CatalogProps) => {
  return (
    <div
      className="catalog-container"
      style={{ display: show ? "flex" : "none" }}
    >
      <section className="catalog-section">
        <h3>CATEGORIES</h3>
        <ul>
          <li>category title</li>
          <li>category title</li>
          <li>category title</li>
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
