import React from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import { useCart } from "../context/CartContext";
const ProductList = () => {
  console.log("useCart:", useCart());
  return (
    <>
      <div className="container mx-auto px-4">
        <SearchFilter />
        <CategoryFilter />
      </div>
    </>
  );
};

export default ProductList;
