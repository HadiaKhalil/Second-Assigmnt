import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Hero = () => {
  return (
    <div className=" text-white"> 
      <div className='container py-10'>
        <div className='grid lg:grid-cols-2 gap-6 items-center w-full md:text-start text-center '>
          <div>
            <div className="sm:text-[11px] text-[9px] flex md:justify-start justify-center gap-5 ">
              <p className='tracking-[8px]'>MAZHAR IQBAL</p>
            </div>
            <h1 className='sm:text-5xl text-[30px] font-semibold  md:w-[400px] leading-tight pt-2 '>
        I AM <span className="text-blue-900">{`SPECIALIST`}</span> IN ECOMERCE
            </h1>
            <h3 className='sm:text-[14px] text-base md:w-[450px] py-10'>
          {`An e-commerce specialist managing stores on TikTok Shop, Walmart, eBay,
           and Amazon. With expertise in online selling, I help businesses grow through
            effective product listings 
          and marketing strategies. Let,s scale your e-commerce success together! 

`}            </h3>
            <Link  href='/work' className='bg-orange-400 text-[12px] py-3 px-5 '>
              SEE WORK
            </Link>
          </div>
          <div className='mt-10'>
            <Image
              src="/images/eCommerce-Website-Components-photo.jpg"
              alt="XX99 MARK II HEADPHONES"
              className="object-cover rounded-lg w-full"
              width={645}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;