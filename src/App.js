import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutContext from "./contexts/CheckoutContext"
import { useState } from "react";
export default function App() {

  const [productsSelected, setPoductsSelected] = useState([]);
  return (
    <CheckoutContext.Provider value={{ productsSelected, setPoductsSelected }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
    </CheckoutContext.Provider>
  );
}