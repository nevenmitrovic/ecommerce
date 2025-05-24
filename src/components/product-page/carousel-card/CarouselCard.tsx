import "./carousel-card.style.css";

import Carousel from "@/components/product-page/carousel/Carousel";

import { type IProduct } from "@/services/productsService";

interface CarouselCardProps {
  product: IProduct;
}

const CarouselCard = ({ product }: CarouselCardProps) => {
  return (
    <>
      <Carousel images={product.images} />
      <div className="card-title">{product.name}</div>
      <div className="card-regular-price">
        ${product.regular_price.toFixed(2)}
      </div>
      <div className="card-price">${product.sale_price.toFixed(2)}</div>
    </>
  );
};

export default CarouselCard;
