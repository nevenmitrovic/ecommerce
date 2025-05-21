import { useParams } from "react-router";

import PageHeader from "@/components/catalog-page/header/PageHeader";
import Navbar from "@/components/common/navbar/Navbar";

const Catalog = () => {
  const { unit, id } = useParams();

  return (
    <>
      <Navbar />
      <PageHeader unit={unit} />
      <p>id: {id}</p>
    </>
  );
};

export default Catalog;
