import React from "react";
import Hero from "../Components/Hero";
import ServiceSection from "../Components/ServiceSection";
import AboutSection from "../Components/AboutSection";

const Home = () => {
  return (
    <div className="bg-[#020B0C]">
      <Hero />
      <ServiceSection />
      <AboutSection />
    </div>
  );
};

export default Home;
