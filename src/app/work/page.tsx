import Image from "next/image";

export default function page  ()  {
  return (
    <div>
        


                    <div className="md:max-w-[85%]   mt-36 mx-auto w-full  max-w-[1440px] md:px-0 flex-wrap md:py-0 max-md:w-[75%]  ">
                          <div
                            className="text-white  font-title items-center  max-w-[790px] 
                                max-md:mt-3 max-sm:mt-[-59px]  mx-auto max-md:items-center max-sm:ml-0    "
                          >
                            <h1 className="text-[10px] max-sm:text-[8px]   ">MY WORK</h1>
                            <h1 className="text-[18px]  max-w-[279px]   max-sm:text-[20px] font-bold font-title ">{`Expert in private labelling,Wholesale model with the vast experience of 3 years`}</h1>
                          </div>
                  
                          <div className="flex justify-center gap-11 max-sm:mt-1 max-sm:gap-1  max-md:flex-col  max-sm:items-center max-md:items-center ">
                            <div className="div1 h-[499px] w-[370px]  mt-10 max-sm:w-[290px]  max-md:h-[449px] max-md:w-[290px] ">
                              <Image
                                src="/images/WhatsApp Image 2025-02-03 at 12.38.20 PM.jpeg"
                                alt="my image"
                                width={370}
                                height={520}
                                className=""
                              />
                  
                              <p className=" mt-3 px-5 text-white font-title">
                              Experience of 3 years With the vast 
                              </p>
                              <p className="max-w-[360px] text-[11px] py-3 px-5 text-white">
                              {`Ebay 
A to Z store management, inventory management,
Customer support care,
Account health assurance.`}
                              </p>
                            </div>
                  
                            <div className="div1 h-[499px] w-[370px] mt-[-90px] max-sm:w-[290px]  max-md:w-[290px]  max-md:mt-9  max-md:h-[449px] ">
                              <Image
                                src="/imageS/WhatsApp Image 2025-02-03 at 12.38.20 PM(1).jpeg"
                                alt="my image"
                                width={370}
                                height={520}
                                className=""
                              />
                              <div>
                              <p className=" mt-3 px-5 text-white font-title">
                              Experience of 3 years With the vast 
                              </p>
                              <p className="max-w-[360px] text-[11px] py-3 px-5 text-white">
                              {`Ebay 
A to Z store management, inventory management,
Customer support care,
Account health assurance.`}
                              </p>
                            </div>
                            </div>
                          </div>
                  
                          {/************************  second section **************************/}
                  
                          <div className="flex justify-center gap-11 max-sm:mt-24 max-sm:gap-2 max-md:flex-col max-sm:items-center max-md:items-center">
                            <div className="div1 mt-5 w-[370px] h-[599px] max-md:h-[549px] max-md:w-[290px] max-sm:mt-[-49px] ">
                          <video width="600" controls>
                            <source src="/images/VID-20250203-WA0013.mp4" type="video/mp4" />
                            
                          </video>
                          <p className=" mt-3 px-5 text-white font-title">
                              Experience of 3 years With the vast 
                              </p>
                              <p className="max-w-[360px] text-[11px] py-3 px-5 text-white">
                              {`Ebay 
A to Z store management, inventory management,
Customer support care,
Account health assurance.`}
                              </p>
                            </div>
                  
                            <div className="div1 h-[599px] w-[370px] mt-[-108px] max-md:mt-0   max-md:h-[549px] max-md:w-[290px] max-sm:mt-8  ">
                            <video width="600" controls>
                            <source src="/images/VID-20250203-WA0013.mp4" type="video/mp4" />
                            
                          </video>
                              <div>
                              <p className=" mt-3 px-5 text-white font-title">
                              Experience of 3 years With the vast 
                              </p>
                              <p className="max-w-[360px] text-[11px] py-3 px-5 text-white">
                              {`Ebay 
A to Z store management, inventory management,
Customer support care,
Account health assurance.`}
                              </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center ml-[446px] mt-[-80px] max-md:ml-0 max-md:mt-10 ">
                            <button className=" button border-2 border-[#763CAC] hover:bg-white hover:text-black   text-[11px] py-3 px-6 text-white">
                             GO BACK
                            </button>
                          </div>
                        </div>

    </div>
  )
}

