import { Route, Routes } from "react-router";

import { SortContextProvider } from "@/stores/contexts/SortContext";

import Home from "@/pages/Home";
import Catalog from "@/pages/Catalog";
import Product from "@/pages/Product";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/catalog/:unit/:id/products"
        element={
          <SortContextProvider>
            <Catalog />
          </SortContextProvider>
        }
      />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
