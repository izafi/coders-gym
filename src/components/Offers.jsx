import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { SlideLeft } from "../utility/animation";
import { motion } from "framer-motion";

const Offers = () => {
  return (
    <div
      className="
        bg-[#FFFFFF]
        h-auto
        w-full
        pt-16
        sm:pt-20
        lg:pt-25
        pb-10
        px-4
        sm:px-6
        lg:px-8
      "
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <section className="w-full max-w-[1280px] mx-auto">

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            w-full
          "
        >

          {/* ================= INTRO ================= */}
          <div
            className="
              flex
              flex-col
              gap-4
              items-start
              justify-center
              p-5
              sm:p-6
              min-h-[250px]
              lg:min-h-[300px]
            "
          >
            <h1
              className="
                text-black
                leading-[36px]
                sm:leading-[40px]
                text-[30px]
                sm:text-[34px]
                lg:text-[36px]
                font-bold
                text-left
              "
            >
              What we <br /> offer for you
            </h1>

            <p
              className="
                text-[#6b7280]
                text-[14px]
                sm:text-[15px]
                lg:text-[16px]
                font-normal
                leading-6
                text-left
                max-w-[300px]
              "
            >
              It is a long established fact that a reader readable.
            </p>
          </div>

          {/* ================= YOGA ================= */}
          <motion.div
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="
              flex
              flex-col
              gap-5
              items-start
              justify-center
              min-h-[250px]
              lg:min-h-[300px]
              p-5
              sm:p-6
              bg-[#F3F4F6]
              rounded-[16px]
              hover:bg-white
              hover:shadow-2xl
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <div className="flex flex-col gap-4 items-start justify-center">

              <GrYoga
                className="
                  text-black
                  text-[32px]
                  sm:text-[34px]
                "
              />

              <h1
                className="
                  text-black
                  text-[21px]
                  sm:text-[22px]
                  lg:text-[24px]
                  font-semibold
                  text-left
                "
              >
                Yoga Equipments
              </h1>

            </div>

            <p
              className="
                text-[#6b7280]
                text-[14px]
                sm:text-[15px]
                lg:text-[16px]
                font-normal
                leading-6
                text-left
              "
            >
              It is a long established fact that a reader readable.
            </p>
          </motion.div>

          {/* ================= MUSCLES ================= */}
          <motion.div
            variants={SlideLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="
              flex
              flex-col
              gap-5
              items-start
              justify-center
              min-h-[250px]
              lg:min-h-[300px]
              p-5
              sm:p-6
              bg-[#F3F4F6]
              rounded-[16px]
              hover:bg-white
              hover:shadow-2xl
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <div className="flex flex-col gap-4 items-start justify-center">

              <FaDumbbell
                className="
                  text-black
                  text-[32px]
                  sm:text-[34px]
                "
              />

              <h1
                className="
                  text-black
                  leading-[30px]
                  sm:leading-[32px]
                  text-[21px]
                  sm:text-[22px]
                  lg:text-[24px]
                  font-semibold
                  text-left
                "
              >
                Muscles Equipments
              </h1>

            </div>

            <p
              className="
                text-[#6b7280]
                text-[14px]
                sm:text-[15px]
                lg:text-[16px]
                font-normal
                leading-6
                text-left
              "
            >
              It is a long established fact that a reader readable.
            </p>
          </motion.div>

          {/* ================= FITNESS ================= */}
          <motion.div
            variants={SlideLeft(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="
              flex
              flex-col
              gap-5
              items-start
              justify-center
              min-h-[250px]
              lg:min-h-[300px]
              p-5
              sm:p-6
              bg-[#F3F4F6]
              rounded-[16px]
              hover:bg-white
              hover:shadow-2xl
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <div className="flex flex-col gap-4 items-start justify-center">

              <GiGymBag
                className="
                  text-black
                  text-[32px]
                  sm:text-[34px]
                "
              />

              <h1
                className="
                  text-black
                  leading-[30px]
                  sm:leading-[32px]
                  text-[21px]
                  sm:text-[22px]
                  lg:text-[24px]
                  font-semibold
                  text-left
                "
              >
                Fitness Equipments
              </h1>

            </div>

            <p
              className="
                text-[#6b7280]
                text-[14px]
                sm:text-[15px]
                lg:text-[16px]
                font-normal
                leading-6
                text-left
              "
            >
              It is a long established fact that a reader readable.
            </p>
          </motion.div>

        </div>

      </section>
    </div>
  );
};

export default Offers;