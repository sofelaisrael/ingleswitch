import React, { useEffect, useRef, useState } from "react";
import icon from "../assets/titleicon.svg";
import { RxCaretRight } from "react-icons/rx";
import services from "../assets/services.json";
import { motion, useInView } from "framer-motion";
import arrow from "../assets/arrow.png";
import shape from "../assets/shape.svg";
import star from "../assets/star.svg";

function useCountUp(end, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setValue(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return value;
}
const ServiceSection = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 1 });
  const clients = useCountUp(statsInView ? 15 : 0);
  const retention = useCountUp(statsInView ? 95 : 0);
  const experience = useCountUp(statsInView ? 5 : 0);
  return (
    <section className="bg-[#020B0C] text-white p-20 max-md:p-5 font-[space] border-t-3 border-[#FFFFFF59] rounded-[20px] mx-2 relative">
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

      <div className="content py-6text-[#FFFFFFCC]">
        At IngleSwitch we are experts in delivering Technology Solutions. Our
        solutions are cost effective, easy to use and adaptive for next level
        growth. These solutions provide the platform for an agile ICT
        environment that drives organizations towards set objectives. We
        instantly transform any organization and deliver visible return on
        Investment.
      </div>
       
      <div className="end flex justify-end gap- max-lg:w-2/3 max-md:justify-center max-lg:mx-auto max-lg:ml-auto w-fit mt-10">
        <div className="arrow -translate-y-[30px] max-md:hidden">
          <img src={arrow} className="rotate-190" alt="" />
        </div>
        <div className="text-[17px] max-md:text-[17px] inline-flex items-center justify-center px-2 py-6 rounded-lg gap-5 max-md:gap-2 max-md:py-2">
          <span>Innovate.</span>
          <span className="bg-linear-to-r from-[#CEE902] to-[#830201] h-1 w-8 max-md:w-4 rounded-full"></span>
          <span>Accelerate.</span>
          <span className="bg-linear-to-r from-[#CEE902] to-[#830201] h-1 w-8 max-md:w-4 rounded-full"></span>
          <span>Thrive.</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-10 gap-5">
         {services.map((service, idx) => (
          <motion.div
           key={service.id ?? idx}
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
           className="bg-linear-to-t from-[#060f1667] to-[#16171757] flex flex-col gap-1 border-t-2 border-[#FFFFFF1A] rounded-lg p-5"
         >
           <div className="items text-[20px]">{service.title}</div>
           <div className="cont text-[20px] text-white/50">{service.desc}</div>
         </motion.div>
        ))}
      </div>

      <img
        src={shape}
        alt=""
        className="absolute right-0 top-0 max-md:w-[50px]"
      />
    </section>
  );
};

export default ServiceSection;
