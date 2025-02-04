import React from "react";
import Image from "next/image"

const Cards = () => {
  return (
    <div>
      <div className="container mx-auto font-serif">
        <h1
          className=" lg:text-3xl md:text-3xl px-2  text-white font-extrabold md:pt-2 "
        >
          Work Experience
        </h1>
        {/* frst cards section  */}
        <div className=" flex justify-center px-2  z-10  mx-auto pt-7 flex-wrap gap-8  text-white">
          <div className="z-10">
            <Image
              src="/images/Rectangle 974.png"
              alt="my image"
              width={590}
              height={60}
              className="rounded-t-lg"
            />
            <div className="text flex  rounded-b-lg z-10 max-sm:h-[130px] ">
           
              <Image
                 src="/images/118691_ebay_512x512.png"
                alt="my image"
                width={80}
                height={60}
                className="mt-7"
              />

              <div>
                <p
                  className="text-[20px] mb-[16px]  lg:mt-5 leading-5
              max-w-[200px] pl-4  max-sm:text-[16px]  "
                >
                  Experience of 3 years With the vast 
                </p>

                <p className=" text-[12px]  max-w-[350px] pl-4  max-sm:pb-5 max-sm:text-[9px]">
                  {" "}
                  {`Ebay 
A to Z store management, inventory management,
Customer support care,
Account health assurance.`}
                </p>
              </div>
            </div>
          </div>
          <div className="z-10">
            <Image
              src="/images/Rectangle 974.png"
              alt="my image"
              width={583}
              height={60}
              className="rounded-t-lg"
            />
            <div
              className='text1 flex  rounded-b-lg"
               '
            >
              <div>
                <Image
                  src="/images/Amazon-512.webp"
                  alt="my image"
                  width={80}
                  height={60}
                  className="mt-7 "
                />
              </div>
              <div>
              <p
                  className="text-[20px] mb-[16px]  lg:mt-5 leading-5
              max-w-[200px] pl-4  max-sm:text-[16px]  "
                >
                  Experience of 4 years With the vast 
                </p>

                <p className="text-[12px]  max-w-[350px] pl-4  max-sm:text-[9px] ">
                  {" "}
                  {`Amazon
FBM & FBA
Private labelling, 
PPC. 
Sourcing from authentic Distributor, 
Brand approval`}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* second card section */}
        <div
          className="flex justify-center px-2 z-10  mx-auto pt-7 flex-wrap gap-8   text-white"
        >
          <div className="z-10">
            <Image
              src="/images/Rectangle 974.png"
              alt="my image"
              width={590}
              height={60}
              className="rounded-t-lg"
            />
            <div className=" text2 flex  rounded-b-lg z-10   ">
              <div>
                <Image
                   src="/images/tiktok-shop-logo-png.webp"
                  alt="my image"
                  width={90}
                  height={60}
                  className="mt-7 "
                />
              </div>
              <div >
              <p
                  className="text-[20px] mb-[16px]  lg:mt-5 leading-5
              max-w-[200px] pl-4  max-sm:text-[16px]  "
                >
                  Experience of 3 years With the vast 
                </p>
                <p className="text-[12px]  max-w-[350px] pl-4  max-sm:text-[9px]">
                  {" "}
                  {`TikTok Shop Store A to Z management.TikTok Shop USA& UK. 
Drop shipping, 
White labelling`}
                </p>
              </div>
            </div>
          </div>
          <div className="z-10">
            <Image
              src="/images/Rectangle 974.png"
              alt="my image"
              width={583}
              height={60}
              className="rounded-t-lg"
            />
            <div className=" text3 flex   rounded-b-lg z-10">
              <div>
                <Image
                  src="/images/Walmart-Logo-PNG-Photos.png"
                  alt="my image"
                  width={90}
                  height={60}
                  className="mt-7"
                />
              </div>
              <div >
              <p
                  className="text-[20px] mb-[16px]  lg:mt-5 leading-5
              max-w-[200px] pl-4  max-sm:text-[16px]  "
                >
                  Experience of 4 years With the vast 
                </p>
                <p className="text-[11px] max-w-[380px] pl-4  max-sm:text-[9px]">
                  {`Walmart Store A to Z management.
Seller fulfilment, WFS,
inventory Management,
Customer Support care, 
Sourcing from authentic distributor.`}
                </p>
              </div>
            </div>
          </div>
          <div className=" absolute ">
            <Image
              src="/images/Gradient(3).png"
              alt="my img"
              height={350}
              width={420}
              className="mt-[-250px]"
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Cards;
