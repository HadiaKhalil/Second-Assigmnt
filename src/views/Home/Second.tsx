import React from 'react'
import Image from "next/image";
const Second = () => {
  return (
  <>
   <div className='container text-white md:py-10 '>

          <div className='grid lg:grid-cols-2 gap-6 items-center w-full md:text-start text-center py-10'>
          
            <div className="">

<h1 className="lg:text-5xl md:text-3xl   text-2xl font-extrabold  text-white ">
         {` Hello !`}
</h1>
<h1 className="lg:text-4xl md:text-3xl text-2xl  font-extrabold  md:pt-2 max-w-[440px] max-lg:text-[25px] ">
  I am <span className="text-blue-800">Mazhar Iqbal.
    
  </span>
</h1>
<h3 className='sm:text-[14px] text-[11px] md:w-[450px] sm:py-8 py-2'>

{` I focus on store management, product optimization, and sales growth. Helping businesses 
thrive in the online marketplace is my passion! With expertise in product listing, optimization, and store management, I help businesses maximize sales.

 I handle every aspect with precision.
, I turn ideas into successful ventures.
Let’s grow your e-commerce brand and achieve long-term success together!`}
</h3>
</div>
<div >
              <Image
                src="/images/Ecommerce.jpg"
                alt="Ecommerce"
                className="object-cover rounded-lg w-full"
                width={645}
                height={300}
              />
            </div>
</div>


            
          </div>
       
  </>
  )
}

export default Second