import "./carousel-card.style.css";

import Carousel from "@/components/product-page/carousel/Carousel";
import ProductInfo from "@/components/product-page/product-info/ProductInfo";
import Button from "@/components/common/buttons/Button";

import { type IProduct } from "@/services/productsService";

interface CarouselCardProps {
  product: IProduct;
}

const CarouselCard = ({ product }: CarouselCardProps) => {
  return (
    <div className="carousel-card">
      <Carousel images={product.images} />

      <div className="card-title">{product.name}</div>
      <div className="card-regular-price">
        ${product.regular_price.toFixed(2)}
      </div>
      <div className="card-price">${product.sale_price.toFixed(2)}</div>

      <ProductInfo
        description={product.description}
        specs={product.specs}
        features={product.features}
      />
      <div className="button-container">
        <Button
          type="button"
          onClick={() => console.log("clicked")}
          text="Add to cart"
          classNam="main-button"
        />
      </div>
    </div>
  );
};

export default CarouselCard;
