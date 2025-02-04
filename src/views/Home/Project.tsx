import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <div>
      <div>
        <div
          className="text-white  font-title mt-44 pl-80 mx-auto w-full max-w-[1440px] 
             flex-wrap  max-md:w-[75%]  max-md:pl-0 max-md:mt-11 "
        >
          <h1 className=" text0 text-[17px] max-sm:text-[12px]">
           Ecomerce
          </h1>
          <h1 className="text-[26px]  max-sm:text-[20px] font-bold font-title">
            Example Work
          </h1>
        </div>
        <div className="relative flex justify-center">
          <div className="ml-[530px]  mt-[-100px] absolute  max-md: max-sm:ml-[20px] max-sm:mt-[40px] ">
            <Image
              src="/Image/Gradient(3).png"
              alt="img"
              width={350}
              height={200}
            />
          </div>
          <div
            className="ml-[350px] mt-[-100px] absolute max-sm:hidden  max-md:ml-[-10px] max-md:mt-9
         flex-wrap"
          >
            <Image
              src="/Image/Gradient(3).png"
              alt="img"
              width={350}
              height={200}
            />
          </div>
        </div>
        <div className="flex justify-center relative max-md:flex-col max-md:items-center gap-10">
          <div
            className="containtr  text-[13px] text-white max-w-[460px] w-[800px] rounded-t-lg rounded-b-lg
             h-[140px] py-7 px-10 mt-12 max-sm:w-[300px] max-sm:py-4 max-sm:px-10 max-sm:text-[11px] max-sm:mt-8 "
          >
            {`I am an expert in Private Labeling and the Wholesale Model, with 3 years of extensive experience in this field.
I have a deep understanding of product sourcing, branding, 
 and scaling businesses on  e-commerce platforms.
I have hands-on experience with platforms like Amazon, eBay.`}
          </div>
          <div className="max-sm:w-[300px]">
            <Image
              src="/images/Ecommerce.jpg"
              alt="img"
              width={340}
              height={300}
            />
          </div>
        </div>
        <div className="flex  gap-1 ml-[-670px] justify-center max-sm:ml-52 max-sm:mt-4 max-sm:gap-3">
          <div className="">
            <Image
              src="/images/118691_ebay_512x512.png"
              alt="img"
              width={20}
              height={20}
            />
          </div>
          <div className="">
           <Image src="/images/Amazon-512.webp" alt="img" width={20} height={20} />
          </div>
          <div className="">
            <Image src="/images/tiktok-shop-logo-png.webp" alt="img" width={20} height={20} />
          </div>
          <div className="">
            <Image src="/images/Walmart-Logo-PNG-Photos.png" alt="img" width={20} height={20} />
          </div>
        </div>
      </div>


   
    </div>
  );
};

export default Project;
