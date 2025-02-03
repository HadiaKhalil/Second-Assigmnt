import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
<div className="bg-[#763CAC] text-white mt-64 ">
      <div className="container"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-8"> 
       
          <div className="w-full text-center lg:text-start">
         
              
            <div className='flex '>
            <div className='text-[35px] font-semibold'>
            MI
          </div>
          <div className='leading-[15px] pt-3 font-serif'>
          <p>Ecomerce</p>
          <p>Freelancing</p>
       
       
          </div>
            </div>
            <div>
              <h3 className="md:text-[13px] text-[11px] lg:w-[430px]  py-3"> 
              {` I focus on store management, product optimization, and sales growth. Helping businesses 
thrive in the online marketplace is my passion! With expertise in product listing, optimization, and store management, I help businesses maximize sales.

 I handle every aspect with precision.
, I turn ideas into successful ventures.
Let’s grow your e-commerce brand and achieve long-term success together!`}
              </h3>
             
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end "> 
            <div className="flex text-[12px] gap-6"> 
            <p className="cursor-pointer">TIKTOKSHOP</p>
              <p className="cursor-pointer text-orange-500">WALMART</p>
              <p className="cursor-pointer">AMAZON</p>
              <p className="cursor-pointer">EBAY</p>
            </div>
            <div className="flex gap-3 py-8  lg:items-end "> 
              <div className="cursor-pointer text-white hover:text-orange-700"><FaFacebook size={20} /></div>
              <div className="cursor-pointer text-white hover:text-orange-700"><FaTwitter size={20} /></div>
              <div className="cursor-pointer text-white hover:text-orange-700"><FaInstagramSquare size={20} /></div>
            </div>
          </div>
        </div>
        <div className=' items-center text-center grid md:grid-cols-4'>
        <h3 className='md:text-[13px] text-[11px]'>
                Copyright 2025. All Rights Reserved
              </h3>
              <h3 className='md:text-[13px] text-[11px]'>
              {`  For contact---  >`}</h3>
                <h3 className='md:text-[13px] text-[11px]'>
                  03467956682</h3>
                  <h3 className='md:text-[13px] text-[11px]'>
                  preciousmalik7797@gmail.com</h3>

        </div>
      
      </div>
    </div>
      
       
  );
};

export default Footer;

          
            