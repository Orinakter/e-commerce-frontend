import React from "react";
import { FaCartShopping } from "react-icons/fa6";

export const Nav3 = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-4 bg-white ">
        <ul className="flex gap-6 text-sm font-semibold text-gray-800">
          <li>Home</li>
          <li>All Product</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>

        <div className="flex items-center gap-2 text-gray-800">
          <div className="flex items-center gap-3 relative">
            <span>
              <FaCartShopping />
            </span>
            <span className="absolute -top-2 -right-2  text-white bg-yellow-500 w-5 h-5 flex items-center justify-center rounded-full font-bold">
              0
            </span>
          </div>
          <span className="text-sm font-semibold">$0.00</span>
        </div>
      </nav>
    </div>
  );
};
