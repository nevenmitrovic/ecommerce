import { useParams } from "react-router";

const Catalog = () => {
  const { unit, id } = useParams();

  return (
    <div>
      <h1>unit: {unit}</h1>
      <p>id: {id}</p>
    </div>
  );
};

export default Catalog;
