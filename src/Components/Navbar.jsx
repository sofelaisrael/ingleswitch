import { RxCaretRight } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className=" text-white bg-[#020B0C] font-[space]">
      <div className="mx-auto flex items-center justify-between px-20 py-5 max-md:px-10 max-sm:px-5">
        <img src={logo} className="w-20 cursor-pointer" />

        <div className="flex justify-center items-center gap-5 text-[14px] max-md:text-[10px] max-md:gap-3">
          <Link to="/" className="home">
            Home
          </Link>
          <Link
            to="/contact"
            className="contact border px-10 max-md:px-3 rounded-full border-gray-500 py-1 flex items-center gap-1 cursor-pointer "
          >
            Contact Us{" "}
            <RxCaretRight className="text-[24px] max-md:text-[16px]" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
