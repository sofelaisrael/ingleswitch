import React, { useEffect, useRef, useState } from "react";
import right from "../assets/right.svg";
import { RxCaretRight } from "react-icons/rx";
import testimonials from "../assets/testimonials";
import { motion, useInView } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import cursor from "../assets/cursor.png";

const AboutSection = () => {
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const [page, setPage] = useState(0);
  const direction = 1;

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  const itemVariants = {
    hidden: { opacity: 0.2, y: 20 },
    show: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
  };

  const r1 = useRef(null);
  const r2 = useRef(null);
  const r3 = useRef(null);

  const v1 = useInView(r1, { once: true, amount: 1 });
  const v2 = useInView(r2, { once: true, amount: 1 });
  const v3 = useInView(r3, { once: true, amount: 1 });

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45 },
    },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: { duration: 0.35 },
    }),
  };

  const currentItems = testimonials.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <>
      <section className="bg-[#020B0C] text-white flex flex-col items-center p-10 mt-10 relative font-[space] max-md:p-5">
        <div className="build rounded-full bg-linear-to-r from-[#001E2B4d] to-[#9999994d] text-[13px] max-md:text-[10px] py-1 px-10 max-md:px-5 font-semibold">
          Building Affordable Solutions Around You
        </div>

        <div className="about py-10 w-1/2 max-md:w-full flex flex-col gap-10">
          {/* --- ITEM 1 --- */}
          <motion.div
            ref={r1}
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate={v1 ? "show" : "hidden"}
          >
            <div className="first space-y-2 relative">
              <div className="absolute w-1 h-full bg-linear-to-t from-[#737373] to-[#001E2B] -left-10"></div>
              <div className="title text-[18px]">DISCOVERY & STRATEGY</div>
              <div className="desc text-[14px] text-[#ffffffAC]">
                We analyze your goals, identify opportunities, and craft a clear
                roadmap for success.
                <br /> Our strategic discovery phase ensures we build solutions
                aligned with your vision.
              </div>
            </div>
          </motion.div>

          {/* --- ITEM 2 --- */}
          <motion.div
            ref={r2}
            custom={0.2}
            variants={itemVariants}
            initial="hidden"
            animate={v2 ? "show" : "hidden"}
          >
            <div className="second space-y-2">
              <div className="title text-[18px]">IMPLEMENTATION</div>
              <div className="desc text-[14px] text-[#FFFFFFAC]">
                We bring your ideas to life with precision and efficiency.
                <br />
                Our team develops reliable, high-quality systems built to scale
                and perform.
              </div>
            </div>
          </motion.div>

          {/* --- ITEM 3 --- */}
          <motion.div
            ref={r3}
            custom={0.4}
            variants={itemVariants}
            initial="hidden"
            animate={v3 ? "show" : "hidden"}
            className="mb-20"
          >
            <div className="third space-y-2">
              <div className="title text-[18px]">OPTIMIZATION</div>
              <div className="desc text-[14px] text-[#FFFFFFAC]">
                We refine and enhance your digital products for better
                performance and higher returns.
                <br />
                From speed improvements to workflow upgrades, we ensure
                continuous growth.
              </div>
            </div>
          </motion.div>
        </div>

        <img
          src={right}
          alt=""
          className="absolute right-0 top-0 max-md:w-[50px]"
        />
      </section>

      <section className="testimonials px-10 max-md:p-5">
        <div
          className="testimonials p-10 max-md:p-5 bg-linear-to-b from-[#020B0C] to-[#0F1214] relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={page}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {currentItems.map((item, i) => (
                  <div
                    key={i}
                    className="relative text-center px-6 max-md:px-2 flex flex-col items-center text-white gap-3"
                  >
                    {i === 0 && (
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-white"></div>
                    )}

                    <div className="size-20 rounded-full overflow-hidden">
                      <img src={item.image} alt="" />
                    </div>

                    <h3 className="text-xl max-md:text-[16px] font-semibold mb-3 max-md:mb-0">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-5 max-md:mb-2 max-md:text-[12px]">
                      {item.desc}
                    </p>
                    <p className="font-semibold max-md:text-[14px]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ==== PAGINATION DOTS ==== */}
          <div className="flex justify-center gap-1 mt-16">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-1 w-6 rounded-full transition ${
                  i === page
                    ? "bg-linear-to-r to-[#174C63] from-[#3DB8EE]"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="start grid grid-cols-6 gap-10 text-white font-[space] px-10 w-2/3 max-lg:w-4/5 mx-auto py-20 max-md:px-5 max-md:w-full max-md:text-[10px]">
        <div className="col-span-4 max-md:col-span-full">
          <div className="head text-[24px] max-md:text-[16px] flex items-center gap-3">
            <span>Ready to Elevate your Business?</span>
            <img src={cursor} width={30} className="rotate-z-90" alt="" />
          </div>
          <div className="content py-2 text-[12px] text-[#FFFFFFCC]">
            Let’s help you build powerful, innovative digital solutions tailored
            specifically for your goals. Partner with us to bring your ideas to
            life.
          </div>
        </div>

        <div className="col-span-2 max-md:col-span-full">
          <div className="contact max-lg:text-[12px] w-fit border px-10 max-lg:px-3 rounded-full border-gray-500 py-1 flex items-center gap-1 cursor-pointer">
            Contact Us{" "}
            <RxCaretRight className="text-[24px] max-md:text-[16px]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
