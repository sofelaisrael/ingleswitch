import React from "react";
import icon from "../assets/titleicon.svg";
import { RxCaretRight } from "react-icons/rx";
import services from "../assets/services.json";

const ServiceSection = () => {
  return (
    <section className="bg-linear-to-b from-[#18191A4D] to-[#12182A00] text-white p-20 max-md:p-5 font-[space]">
      <div className="flex topbar justify-between items-center">
        <div className="head flex items-center gap-5 max-md:gap-2">
          <span className="text-[32px] max-md:text-[20px]">Our Services</span>
          <div className="icon max-md:w-5">
            <img src={icon} alt="" />
          </div>
        </div>
        <div className="contact border max-md:text-[12px] px-10 max-md:px-3 rounded-full border-gray-500 py-1 flex items-center gap-1 cursor-pointer ">
          Contact Us <RxCaretRight className="text-[24px] max-md:text-[16px]" />
        </div>
      </div>

      <div className="content py-6 max-md:text-[12px]">
        At IngleSwitch we are experts in delivering Technology Solutions. Our
        solutions are cost effective, easy to use and adaptive for next level
        growth. These solutions provide the platform for an agile ICT
        environment that drives organizations towards set objectives. We
        instantly transform any organization and deliver visible return on
        Investment.
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((services) => (
          <div className="flex flex-col gap-1 border border-[#FFFFFF1A] rounded-lg p-5">
            <div className="items text-[20px]">{services.title}</div>
            <div className="cont text-[12px]">{services.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
