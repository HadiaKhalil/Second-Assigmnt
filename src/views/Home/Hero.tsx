import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="main-container ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 text-[white]">
          <div className=" ">
            <div className=" ">
              <h1 className="lg:text-5xl md:text-3xl font-title text-2xl font-bold pt-24 max-w-[440px] max-lg:text-[25px] max-sm:pt-9">
                I am your <span className="text-sky-200">{`full-stack`}</span>{" "}
                {`wizard,`} turning
                <span className="text-sky-200">web dreams</span> into reality.
              </h1>
              <div className="mt-[-240px] ml-[80px] absolute max-sm:ml-[20px] max-sm:mt-[-120px]">
                <Image
                  src="/Image/Gradient(3).png"
                  alt="my image"
                  className="h-[250px] w-[250px] max-sm:w-[150px] max-sm:h-[150px]"
                  width={250}
                  height={250}
                />
              </div>
              <p className="lg:text-lg md:text-base text-sm mb-12 mt-12 font-title max-lg:text-[14px] max-sm:mt-5">
                Crafting seamless digital experiences from
                {` front-end elegance to back-end robustness, `}I bring your web
                visions to life as a versatile {`full-stack developer`}
              </p>
              <button className="text-[black] hover:text-[black] hover:bg-[#763CAC] bg-[#B1C7FF] flex justify-center items-center max-w-[148px] w-[160px] h-[43px] px-2 mb-6 pt-[10px] pb-2 font-title max-sm:mt-[-15px] rounded">
                project
              </button>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <Image
              src="/Image/img1.png"
              alt="my image"
              layout="responsive"
              width={750}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="line flex justify-center items-center  ">
          <Image
            src="/Image/Line 1.png"
            alt="my image"
            height={500}
            width={1000}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
