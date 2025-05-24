import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();

  return <div>PRODUCT {id}</div>;
};

export default Product;
