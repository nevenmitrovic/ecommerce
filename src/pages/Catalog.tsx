import { useParams } from "react-router";

import PageHeader from "@/components/catalog-page/header/PageHeader";
import Navbar from "@/components/common/navbar/Navbar";
import SortingControl from "@/components/catalog-page/sorting-control/SortingControl";
import ProductsContainer from "@/components/catalog-page/products/ProductsContainer";

const Catalog = () => {
  const { unit, id } = useParams();

  return (
    <>
      <Navbar />
      <PageHeader unit={unit} />
      <SortingControl unit={unit} />
      <ProductsContainer />
    </>
  );
};

export default Catalog;
