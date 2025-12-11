import React from "react";
import arrow from "../assets/arrow.png";
import wave from "../assets/wave.png";
import grid from "../assets/1.svg"
const Hero = () => {
  return (
    <section className="bg-[#020B0C] py-16 px-6 md:px-20 font-[nunito]">

      
      <div className="w-full flex flex-col gap-3 justify-between items-center text-center text-white relative overflow-hidden">
        <div className="wave absolute top-10 left-0 overflow-hidden h-[200px opacity-20 w-full max-md:hidden">
          <img src={grid} alt="" />
        </div>
        <div className="build rounded-full bg-linear-to-r from-[#001E2B4d] to-[#9999994d] text-[13px] max-md:text-[10px] py-1 px-10 max-md:px-5 font-semibold">
          Building Affordable Solutions Around You
        </div>
        <div className="head text-[53px] max-md:text-[26px] max-md:leading-[30px] px-20 max-md:px-4 max-lg:px-7 leading-[50px] py-5">
          Tech Inclined Innovative Solutions For Clients
        </div>
        <div className="content w-1/2 max-md:w-full max-md:px-4 max-lg:px-10 text-gray-500 text-[20px] leading-[24px]">
          A custom software and product development company aimed at helping
          FinTech, EdTech and other Businesses. A custom software and product
          development company aimed at helping FinTech, EdTech and other
          Businesses
        </div>
      </div>

    </section>
  );
};

export default Hero;
