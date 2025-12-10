import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import CartItem from "./components/CartItem";
import CategoryFilter from "./components/CategoryFilter";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import SearchFilter from "./components/SearchFilter";
//pages
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";

const App = () => {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
