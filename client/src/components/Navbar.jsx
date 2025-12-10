import React from "react";
import { House, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="bg-red-950/95 backdrop-blur-md text-white shadow-2xl">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <Link to={"/"}>
            <div className="flex items-center space-x-3 cursor-pointer">
              <House className="w-8 h-8 text-orange-400 drop-shadow-lg" />
              <h1 className="text-4xl font-extrabold uppercase tracking-widest">
                <span className="text-white">wdm</span>
                <span className="text-orange-400">Store</span>
              </h1>
            </div>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to={"/cart"}>
              <div className="p-3 bg-orange-500/10 rounded-2xl hover:bg-orange-500/20 transition-duration-200 border border-orange-400/50 cursor-pointer">
                <ShoppingCart className="w-6 h-6 text-orange-400" />
              </div>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
