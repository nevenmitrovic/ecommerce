import { Route, Routes } from "react-router";

import Home from "@/pages/Home";
import Catalog from "@/pages/Catalog";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/catalog/:unit/:id/products" element={<Catalog />} />
    </Routes>
  );
}

export default App;
