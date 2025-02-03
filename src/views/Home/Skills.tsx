import React from "react";
import Image from "next/image";
const Skills = () => {
  return (
    <div>
      <div className="container">
        <h1 className="  text-white  font-bold font-title  text-[40px] text-center pt-20 max-sm:text-[30px] ">
          MY WORK
        </h1>
        <div className=" flex justify-center items-center mt-5 ">
          <Image
            src="/images/Screenshot 2025-01-14 112710(1).jpg"
            alt="img"
            width={950}
            height={950}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
