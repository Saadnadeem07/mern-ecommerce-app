import React from "react";
import { Search } from "lucide-react";
const SearchFilter = () => {
  return (
    <>
      <div className="bg-gray-900 my-5 p-5 rounded-2xl">
        <div className="bg-gray-800 flex items-center gap-2 rounded-xl focus-within:ring-4 focus-within:ring-orange-400/50 transition duration-300">
          <Search className="h-4 w-4 ml-4" />
          <input
            type="text"
            className="w-full outline-none p-4 text-base font-medium"
            placeholder="Search high-performance product by name or feature..."
          />
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
