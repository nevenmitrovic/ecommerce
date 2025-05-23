import "./product-card.style.css";

interface ProductCardProps {
  img: string;
  title: string;
  price: string;
}

const ProductCard = ({ img, title, price }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <div className="product-title">{title}</div>
      <div className="product-price">${price}</div>
    </div>
  );
};

export default ProductCard;
