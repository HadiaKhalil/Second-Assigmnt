import React from "react";
import Image from "next/image";
const Lastsection = () => {
  return (
    <div>
      <div className="max-w-[1440px] w-full mx-auto ">
        <div className=" justify-center items-center md:flex-row flex-col  text-[white] ">
          <div className="flex justify-center  gap-20 mt-12 text-white max-md:flex-col max-md:items-center">
            <div>
              <h1
                className="lg:text-3xl md:text-3xl font-title  text-2xl 
                 font-bold pt-24 max-w-[300px]   max-sm:pt-0  max-sm:text-[23px]  "
              >
              Let’s talk business
              </h1>

              <p className="text-[10px]  mt-7 font-title  max-lg:text-[10px] max-w-[320px] max-sm:text-[10px] max-sm:w-[300px] max-sm:mt-3 ">
              Now that you know a lot about me, let me know if you are interested to work with me.
              </p>
              <p className=" text-[12px] mt-7 max-sm:text-[8px] max-sm:mt-5">
                <u>See all information</u>
              </p>
            </div>
            <div className="img mt-24 max-md:mt-[-33px] max-sm:w-[290px] max-md:h-[360px] ">
              <Image
                 src="/images/Screenshot 2025-01-14 112710(1).jpg"
                alt="my image"
                width={370}
                height={720}
                className=""
              />

              <p className="max-w-[360px] text-[11px] py-3 px-5 text-white">       {`An e-commerce specialist managing stores on TikTok Shop, Walmart, eBay,
           and Amazon. With expertise in online selling, I help businesses grow through
            effective product listings 
          and marketing strategies. Let,s scale your e-commerce success together! 

`} 
 </p>
              <p className=" text-[11px] mt-9  px-6 text-white font-title">
                Mazhar Iqbal
              </p>
              <p className=" text-[9px] mt-1 px-6 text-white font-title pb-2">
              03467956682
              </p>
              <p className=" text-[11px]  px-6 text-white font-title">
                Adnan Ahmad
              </p>
              <p className=" text-[9px] mt-1 px-6 text-white font-title pb-20">
              03457880836
              </p>
            </div>
          </div>
        
        </div>
      </div>
  
    </div>
  );
};

export default Lastsection;
 