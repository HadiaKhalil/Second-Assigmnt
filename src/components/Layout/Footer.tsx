import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
<div className="bg-[#1A0B2E] text-white mt-64 ">
      <div className="container"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-8"> 
       
          <div className="w-full text-center lg:text-start">
         
              
            <div className='flex gap-1 '>
            <div className='text-[57px] font-semibold'>
            MI
          </div>
          <div className='leading-[24px] text-[20px] pt-5 font-serif'>
          <p>Ecomerce</p>
          <p>Freelancing</p>
       
       
          </div>
            </div>
            <div>
              <h3 className="md:text-[13px] text-[11px] lg:w-[430px]  py-3"> 
              {`We proud to be a part of a dynamic ..... members team working  e-commerce success
               across multiple platforms, including Walmart, TikTok Shop, eBay, and Amazon. Collaborating 
               with a talented team, I contribute to strategic planning, execution, and optimization of
                e-commerce operations. Our team's collective expertise and passion for innovation enable us 
                to stay ahead of the curve and achieve exceptional results. Together, we're redefining the 
                e-commerce landscape. Teamwork, dedication, and a customer-centric
               approach are the cornerstones of our success."`}
              </h3>
             
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end pt-8 "> 
            <div className="flex text-[15px] gap-6 font-semibold"> 
            <p className="cursor-pointer">TIKTOKSHOP</p>
              <p className="cursor-pointer text-orange-500">WALMART</p>
              <p className="cursor-pointer">AMAZON</p>
              <p className="cursor-pointer">EBAY</p>
            </div>
            <div className="flex gap-3 py-8  lg:items-end  "> 
              <div className="cursor-pointer text-white hover:text-orange-700"><FaFacebook size={40} /></div>
              <div className="cursor-pointer text-white hover:text-orange-700"><FaTwitter size={40} /></div>
              <div className="cursor-pointer text-white hover:text-orange-700"><FaInstagramSquare size={40} /></div>
            </div>
          </div>
        </div>
     <hr></hr>
      <div className='text-center text-[13px] font-sans font-semibold'>
        <h1>  Mazhar Iqbal /    Adnan Ahmad </h1>
        <h1> Email Address: preciousmalik7797@gmail.com</h1>
        <h1 className='font-sans'>  Contact Info:  03467956682 /  03457880836</h1>
      </div>
      </div>
    </div>
      
       
  );
};

export default Footer;

          
            