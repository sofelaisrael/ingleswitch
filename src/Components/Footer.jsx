import React from "react";
import logo from "../assets/logo.png";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#020B0C] text-gray-300 font-[space] px-6 md:px-20">
      <div className="max-w-6xl mx-auto py-20 border-t border-gray-700 grid gap-12 md:grid-cols-5">

        {/* Logo + Text */}
        <div className="space-y-4 relative md:col-span-2">
          <img src={logo} alt="Logo" className="absolute w-[120px] -top-16" />
          <p className="text-sm text-gray-400 leading-relaxed">
            We create smart, reliable digital products for businesses of all sizes.
          </p>
        </div>

        {/* Navigation */}
        <ul className="text-sm flex flex-col md:flex-row md:justify-end gap-3 md:gap-6 lg:gap-10 text-nowrap md:col-span-2">
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
          <li className="hover:text-blue-500 cursor-pointer">Our Services</li>
        </ul>

        {/* Social Icons */}
        <div className="flex  gap-5 w-fit md:ml-auto md:justify-end">
          <a href="#" className="hover:text-blue-500 text-lg">
            <FiFacebook />
          </a>
          <a href="#" className="hover:text-blue-500 text-lg">
            <FiLinkedin />
          </a>
          <a href="#" className="hover:text-blue-500 text-lg">
            <FiInstagram />
          </a>
        </div>

      </div>

      {/* Bottom Text (optional) */}
      <div className="text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} Ingleswitch. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
