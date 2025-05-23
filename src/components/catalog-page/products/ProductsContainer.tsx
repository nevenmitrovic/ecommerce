import "./product.container.style.css";

import ProductCard from "./product-card/ProductCard";
import type { IProduct } from "@/services/productsService";

interface ProductsContainerProps {
  data: IProduct[] | null;
}

const ProductsContainer = ({ data }: ProductsContainerProps) => {
  return (
    <div className="products-container">
      {data?.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            img={product.images[0]}
            title={product.name}
            sale_price={product.sale_price}
            regular_price={product.regular_price}
          />
        );
      })}
    </div>
  );
};

export default ProductsContainer;
