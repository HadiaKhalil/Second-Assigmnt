
import Image from "next/image";

import React from 'react'

const Cards = () => {
  return (
    <section className="px-4">
      <div className="w-full mx-auto grid grid-cols-1  lg:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="relative rounded-xl overflow-hidden ">
          <Image
            src="/Image/BGcol 1.png"
            alt="Healthy food"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-black/30 "></div>
          <div className="relative z-20 p-6 sm:py-24 text-white">
            <span className="bg-purple-200 text-purple-700 text-lg font-semibold px-4 py-2 rounded-md mb-2">
              New
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold pt-3">
              Introducing Ambrosia Global
            </h2>
            <button className="bg-[#9B37AE]   hover:bg-purple-800  transition text-white font-semibold sm:px-12 px-6 text-lg sm:text-xl py-1  mt-7 rounded-md">
              Buy now!
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-xl overflow-hidden shadow-md">
          <Image
            src="/Image/BGcol 2.png"
            alt="Healthy lifestyle"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="relative z-20 p-6 sm:py-24 text-white">
            <span className="bg-white text-[#4ACAC6] text-lg font-semibold px-4 py-2 rounded-md mb-2">
            Family Pack Edition
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold pt-3">
            Ambrosia Global
            </h2>
            <button className="bg-[#9B37AE]   hover:bg-purple-800  transition text-white font-semibold sm:px-12 px-6 text-lg sm:text-xl py-1  mt-7 rounded-md">
              Buy now!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards
