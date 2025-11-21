import { BsTwitter } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import { CgFacebook } from "react-icons/cg";
import React, { useState } from "react";
import { RxCaretRight } from "react-icons/rx";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  return (
    <section className="bg-[#020B0C] text-white font-[space] relative py-20 max-lg:p-5 max-lg:pb-20">
      <div className="flex flex-col py-10 px-20 max-lg:p-5 items-center justify-center w-1/2 max-lg:w-full border border-gray-700 mx-auto rounded-xl relative">
        <div className="cont">
          <div className="top text-[18px] pb-2">Let’s work together</div>
          <div className="bottom text-[12px]">
            Got a project? Reach out to us if you want to work together on
            something exciting. Or do you need our help? Feel free to contact
            us.
          </div>
        </div>
        <div className="form w-full">
          <form className="space-y-4 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-700 px-1 py-2 focus:outline-none text-sm text-gray-500"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border-b border-gray-700 px-1 py-2 focus:outline-none text-sm text-gray-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-medium mb-1">
                Message
              </label>
              <textarea
                rows="3"
                className="w-full border-b border-gray-700 px-1 py-2 focus:outline-none text-sm text-gray-500 resize-none"
              ></textarea>
            </div>
            <button type="submit" className="w-fit text-[14px] max-lg:text-[10px]">
              <div className="contact border px-10 max-lg:px-3 rounded-full border-gray-500 py-1 flex items-center gap-1 cursor-pointer ">
                Contact Us{" "}
                <RxCaretRight className="text-[24px] max-lg:text-[16px]" />
              </div>
            </button>
          </form>
        </div>

        <div className="icons flex flex-col gap-5 absolute -right-20 max-lg:-bottom-16 max-lg:flex-row max-lg:right-0">
          <div className="size-10 cursor-pointer flex justify-center items-center rounded-full border border-gray-700">
            <CgFacebook />
          </div>
          <div className="size-10 cursor-pointer flex justify-center items-center rounded-full border border-gray-700">
            <CgInstagram />
          </div>
          <div className="size-10 cursor-pointer flex justify-center items-center rounded-full border border-gray-700">
            <BsTwitter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
