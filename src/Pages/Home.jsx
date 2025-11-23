import React, { useEffect, useRef, useState } from "react";
import Hero from "../Components/Hero";
import ServiceSection from "../Components/ServiceSection";
import AboutSection from "../Components/AboutSection";
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
const Home = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 1 });
  const clients = useCountUp(statsInView ? 15 : 0);
  const retention = useCountUp(statsInView ? 95 : 0);
  const experience = useCountUp(statsInView ? 5 : 0);
  return (
    <div className="bg-[#020B0C]">
      <Hero />
      <ServiceSection />
      <div
        ref={statsRef}
        className="stats md:bg-linear-to-r from-[#000000] to-[#09222C] max-md:bg-[#020B0C]  flex items-center justify-center max-md:flex-col gap-16 max-lg:gap-5 text-white font-[space] py-5 -lg:gap-10"
      >
        <div className="flex flex-col items-center">
          <div className="key text-[12px] text-[#ffffff7e]">
            Completed Projects
          </div>
          <div className="value text-[24px]">{clients}+ Clients</div>
        </div>
        <img src={star} className="max-md:hidden" alt="" />

        <div className="flex flex-col items-center">
          <div className="key text-[12px] text-[#ffffff7e]">
            Client Retention Rate
          </div>
          <div className="value text-[24px]">{retention}%</div>
        </div>
        <img src={star} className="max-md:hidden" alt="" />

        <div className="flex flex-col items-center">
          <div className="key text-[12px] text-[#ffffff7e]">
            Years of Experience
          </div>
          <div className="value text-[24px]">{experience}+</div>
        </div>
        <img src={star} className="max-md:hidden" alt="" />

        <div className="flex flex-col items-center">
          <div className="key text-[12px] text-[#ffffff7e]">
            Dedicated Support
          </div>
          <div className="value text-[24px]">24/7</div>
        </div>
      </div>
      <AboutSection />
    </div>
  );
};

export default Home;
