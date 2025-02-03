"use client";

import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-[#1A0B2E] text-white">
        <div className="container">
        <div className="flex justify-between items-center py-10">
          <div className="grid grid-cols-3 w-full ">
            <div className="">
            
              <div className='flex '>
            <div className='text-[35px] font-semibold'>
            MI
          </div>
          <div className='leading-[15px] pt-3 font-serif'>
          <p>Ecomerce</p>
          <p>Freelancing</p>
       
          </div>
          </div>

          
            </div>
            <div className="hidden md:flex justify-center items-center text-[12px] gap-8">
              <p className="cursor-pointer">TIKTOKSHOP</p>
              <p className="cursor-pointer">WALMART</p>
              <p className="cursor-pointer">AMAZON</p>
              <p className="cursor-pointer">EBAY</p>
            </div>
            <div className="flex justify-end  items-center">
              <FaShoppingCart className="text-xl cursor-pointer" />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
              onClick={ToggleNav}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-black text-white">
            <div className="px-4 pt-2 pb-3 space-y-2">
              <p className="hover:bg-gray-700 rounded-lg p-2 cursor-pointer">TIKTOKSHOP</p>
              <p className="hover:bg-gray-700 rounded-lg p-2 cursor-pointer">WALMART</p>
              <p className="hover:bg-gray-700 rounded-lg p-2 cursor-pointer">AMAZON</p>
              <p className="hover:bg-gray-700 rounded-lg p-2 cursor-pointer">EBAY</p>
            </div>
          </div>
        )}
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};

export default Navbar;
