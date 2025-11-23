import React from "react";
import arrow from "../assets/arrow.png";
import wave from "../assets/wave.png";
import grid from "../assets/1.svg"
const Hero = () => {
  return (
    <section className="bg-[#020B0C] py-16 px-6 md:px-20 font-[nunito]">

      
      <div className="w-full flex flex-col gap-3 justify-between items-center text-center text-white relative overflow-hidden">
        <div className="wave absolute top-10 left-0 overflow-hidden h-[200px] w-full">
          <img src={grid} alt="" />
        </div>
        <div className="build rounded-full bg-linear-to-r from-[#001E2B4d] to-[#9999994d] text-[13px] max-md:text-[10px] py-1 px-10 max-md:px-5 font-semibold">
          Building Affordable Solutions Around You
        </div>
        <div className="head text-[53px] max-md:text-[32px] max-md:leading-[30px] px-20 max-md:px-4 max-lg:px-7 leading-[50px] py-5">
          Tech Inclined Innovative Solutions For Clients
        </div>
        <div className="content w-1/2 max-md:w-full max-md:px-4 max-lg:px-10 text-gray-500">
          A custom software and product development company aimed at helping
          FinTech, EdTech and other Businesses. A custom software and product
          development company aimed at helping FinTech, EdTech and other
          Businesses
        </div>
      </div>

{/* 
      <div className="grid grid-cols-2 text-white pt-16 max-lg:grid-cols-1 gap-5">
        <div className="content max-lg:w-2/3 max-md:w-full">
          <div className="head text-[30px] pb-5 leading-[35px]">
            Tech Inclined Innovative Solutions For Clients
          </div>
          <div className="details text-white/60 leading-[30px] text-[16px]">
            Ingleswitch is a software solution company focusing on research and
            innovation of products and services. We provide tech inclined
            innovative solutions for companies. We strive to find answers to
            issues that are moral, effective, and independent of technology
          </div>
        </div>

        <div className="end flex flex-col justify-end gap-10 max-lg:w-2/3 max-md:w-full max-lg:ml-auto">
          <div className="arrow">
            <img src={arrow} className="rotate-200" alt="" />
          </div>
          <div className="bg-[#0F1822] text-[17px] max-md:text-[12px] inline-flex items-center justify-center px-10 max-md:px-3 py-6 rounded-lg gap-5 max-md:gap-2">
            <span>Innovate.</span>
            <span className="bg-linear-to-r from-[#CEE902] to-[#830201] h-1 w-8 max-md:w-4 rounded-full"></span>
            <span>Accelerate.</span>
            <span className="bg-linear-to-r from-[#CEE902] to-[#830201] h-1 w-8 max-md:w-4 rounded-full"></span>
            <span>Thrive.</span>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
