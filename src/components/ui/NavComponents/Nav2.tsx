import React from "react";

import { PiSignIn } from "react-icons/pi";

export const Nav2 = () => {
  return (
    <div>
      <div className="bg-yellow-500 py-4 px-6 flex justify-between items-center">
        
        <div className="text-2xl font-extrabold text-gray-800 w-full">Esther</div>

       
        <div className="bg-white p-2 flex justify-center w-full ">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search our store"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-700 placeholder-gray-500"
            />
            <button className="bg-gray-800 px-5 flex items-center justify-center rounded-r-md rounded-l-md">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>
            </button>
          </div>
        </div>

       
        <div className="text-sm flex justify-end items-center gap-3 w-full">
          <div className="font-medium">
            <PiSignIn />
          </div>
          <div className="font-bold">SignIn</div>
        </div>
      </div>
    </div>
  );
};
