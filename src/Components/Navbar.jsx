import { RxCaretRight } from "react-icons/rx"; 
import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white bg-[#020B0C] font-[space]">
      <div className="mx-auto flex items-center justify-between px-20 py-5 max-md:px-10 max-sm:px-5">

        {/* Logo */}
        <Link to="/">
          <img src={logo} className="w-20 cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <div className="flex justify-center items-center gap-5 text-[14px] max-md:text-[10px] max-md:gap-3">
          <div className="home">Home</div>
          <div className="contact border px-10 max-md:px-3 rounded-full border-gray-500 py-1 flex items-center gap-1 ">Contact Us <RxCaretRight className="text-[24px] max-md:text-[16px]" /></div>
        </div>
      </div>

    </nav>
  );
}
