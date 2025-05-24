import "./product-card.style.css";

export interface ProductCardProps {
  img: string;
  title: string;
  sale_price: number;
  regular_price: number;
}

const ProductCard = ({
  img,
  title,
  sale_price,
  regular_price,
}: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <div className="product-title">{title}</div>
      <div className="product-regular-price">${regular_price.toFixed(2)}</div>
      <div className="product-price">${sale_price.toFixed(2)}</div>
    </div>
  );
};

export default ProductCard;
