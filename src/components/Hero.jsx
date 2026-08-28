import React from "react";
import Navbar from "./Navbar";
import { FaPlay } from "react-icons/fa6";
import { SlideRight, Rotate } from "../utility/animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="
        bg-[url('/imgi_24_bg-BiCRh3MN.png')]
        min-h-screen
        w-full
        bg-center
        bg-cover
        bg-no-repeat
        overflow-hidden
      "
    >
      <Navbar />

      <section>
        <div
          className="
            w-full
            max-w-[1280px]
            mx-auto
            min-h-[calc(100vh-80px)]
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            px-5
            sm:px-8
            md:px-12
            lg:px-16
            xl:px-20
            py-10
            lg:py-0
          "
        >

          {/* ================= LEFT CONTENT ================= */}
          <div
            className="
              flex
              flex-col
              justify-center
              items-start
              py-8
              sm:py-12
              lg:py-14
            "
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <div className="text-left space-y-5 sm:space-y-6">

              {/* Heading */}
              <motion.h1
                variants={SlideRight(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="
                  text-[38px]
                  leading-[45px]
                  sm:text-[48px]
                  sm:leading-[55px]
                  md:text-[55px]
                  md:leading-[62px]
                  lg:text-[58px]
                  lg:leading-[65px]
                  xl:text-[60px]
                  xl:leading-[68px]
                  font-bold
                "
              >
                Gym Gives You The Perfect{" "}
                <span className="text-[#ff8901]">
                  Health
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={SlideRight(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="
                  text-[#6A717C]
                  text-[14px]
                  sm:text-[15px]
                  lg:text-[16px]
                  font-normal
                  leading-6
                  max-w-[500px]
                "
              >
                It is a long established fact that a reader will be by
                readable content of a page when are the best product.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={SlideRight(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-3
                  sm:gap-5
                  items-start
                  sm:items-center
                "
              >

                {/* Order Button */}
                <button
                  className="
                    w-full
                    sm:w-auto
                    text-sm
                    sm:text-base
                    font-semibold
                    cursor-pointer
                    px-6
                    py-3
                    border-2
                    border-[#FF8901]
                    rounded-[5px]
                    flex
                    items-center
                    justify-center
                    text-white
                    bg-[#FF8901]
                    hover:scale-[1.05]
                    sm:hover:scale-[1.09]
                    transition
                    ease-in-out
                    duration-300
                  "
                >
                  Order Now
                </button>

                {/* Watch Button */}
                <button
                  className="
                    w-full
                    sm:w-auto
                    text-sm
                    sm:text-base
                    text-black
                    font-semibold
                    cursor-pointer
                    px-6
                    py-3
                    rounded-[5px]
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:text-[#FF8901]
                    transition
                    duration-300
                  "
                >
                  <FaPlay />
                  Watch Now
                </button>

              </motion.div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="flex items-center justify-center lg:justify-end">

            <motion.img
              variants={Rotate(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="
                w-[260px]
                sm:w-[350px]
                md:w-[430px]
                lg:w-[480px]
                xl:w-[550px]
                max-w-full
                h-auto
                drop-shadow-2xl
                object-contain
              "
              src="/imgi_1_dumbell-Bcy4gPfV.png"
              alt="Dumbbell"
            />

          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;