import "./product.container.style.css";

import ProductCard from "./product-card/ProductCard";

const ProductsContainer = () => {
  return (
    <div className="products-container">
      <ProductCard img="#" title="test" price="500" />
    </div>
  );
};

export default ProductsContainer;
