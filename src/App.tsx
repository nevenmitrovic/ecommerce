import { Route, Routes } from "react-router";

import { SortContextProvider } from "@/contexts/SortContext";

import Home from "@/pages/Home";
import Catalog from "@/pages/Catalog";

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
    </Routes>
  );
}

export default App;
