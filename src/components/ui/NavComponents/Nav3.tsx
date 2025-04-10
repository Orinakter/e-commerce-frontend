import React from "react";
import { FaCartShopping } from "react-icons/fa6";

export const Nav3 = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-4 bg-white ">
        <ul className="flex gap-6 text-sm font-semibold text-gray-800">
<<<<<<< HEAD
          <li className="relative group cursor-pointer">
            <span>Home</span>

            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-2 z-10">
              <li className="px-4 py-2 hover:bg-gray-100">Home 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Home 2</li>
            </ul>
          </li>
          <li className="relative group cursor-pointer">
            <span>Shop</span>

            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-2 z-10">
              <li className="px-4 py-2 hover:bg-gray-100">All Products</li>
              <li className="px-4 py-2 hover:bg-gray-100">Categories</li>
            </ul>
          </li>
          <li className="relative group cursor-pointer">
            <span>Blog</span>

            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-2 z-10">
              <li className="px-4 py-2 hover:bg-gray-100">Latest Posts</li>
              <li className="px-4 py-2 hover:bg-gray-100">Tips</li>
            </ul>
          </li>
          <li className="relative group cursor-pointer">
            <span>Pages</span>

            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-2 z-10">
              <li className="px-4 py-2 hover:bg-gray-100">FAQ</li>
              <li className="px-4 py-2 hover:bg-gray-100">Terms</li>
            </ul>
          </li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>

        <div className="flex items-center gap-2 text-gray-800">
          <div className="flex items-center gap-3 relative">
            <span>
              <FaCartShopping />
            </span>

=======
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

>>>>>>> 12d6e0e5f80e03bb6650c2d0fb1a96d1dd82be9b
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
