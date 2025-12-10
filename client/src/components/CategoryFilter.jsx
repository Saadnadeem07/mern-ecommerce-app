import React from "react";
import { Tag } from "lucide-react";
import { initialProducts } from "../data/product";
//filterting unique category names from all products
const CategoryFilter = () => {
  const allCategories = [
    "All",
    ...new Set(initialProducts.map((c) => c.category)),
  ];
  console.log("categories = ", allCategories);
  const selectedCategory = "All";
  return (
    <>
      <div className="flex gap-5 items-center">
        <Tag className="text-orange-400 w-5 h-5" />
        {allCategories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 text-sm font-bold bg-gray-500/65 rounded-full transition duration-200
              ${
                selectedCategory === category
                  ? "bg-orange-500 text-white shadow-orange-800/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-orange-400 border hover:border-orange-700 border-gray-700"
              }
              `}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryFilter;
