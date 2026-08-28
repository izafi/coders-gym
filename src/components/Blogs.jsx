import React from "react";
import { SlideLeft, SlideRight } from "../utility/animation";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <div
      className="bg-[#FFFFFF] h-auto w-full pt-16 sm:pt-20 lg:pt-25 pb-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <section
        className="
          bg-[#F9F9F9]
          w-full
          max-w-[1110px]
          min-h-[650px]
          flex
          flex-col
          items-center
          justify-center
          py-10
          sm:py-14
          lg:py-20
        "
      >
        <div
          className="
            w-full
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-14
            px-6
            sm:px-10
            lg:px-20
          "
        >
          {/* Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <motion.img
              variants={SlideRight(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="
                w-full
                max-w-[450px]
                h-auto
                object-cover
                drop-shadow-2xl
                rounded-md
              "
              src="/imgi_2_2-D6fIL54y.png"
              alt="Self care"
            />
          </div>

          {/* Content */}
          <div
            className="
              flex
              flex-col
              justify-center
              py-4
              sm:py-8
              lg:py-14
            "
          >
            <div className="text-left space-y-5 sm:space-y-6">
              
              {/* Heading */}
              <motion.h1
                variants={SlideLeft(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="
                  text-[28px]
                  sm:text-[34px]
                  lg:text-[36px]
                  leading-[34px]
                  sm:leading-[40px]
                  lg:leading-[42px]
                  font-bold
                "
              >
                The Importance To Take Care Of Yourself
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                variants={SlideLeft(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="
                  text-[#000]
                  text-[14px]
                  sm:text-[15px]
                  lg:text-[16px]
                  font-normal
                  leading-6
                  max-w-[500px]
                "
              >
                The Importance To Take Care Of Yourself. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Id nam obcaecati sequi
                odio dolore officia magni reiciendis, architecto, eos, aut
                asperiores reprehenderit quas rerum omnis facilis quam eius
                doloribus maxime! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Beatae vero inventore assumenda ducimus
                alias doloribus.
              </motion.p>

              {/* Button */}
              <motion.div
                variants={SlideLeft(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="flex flex-row gap-5 pt-2"
              >
                <button
                  className="
                    text-sm
                    sm:text-base
                    font-semibold
                    cursor-pointer
                    px-5
                    sm:px-6
                    py-2.5
                    sm:py-3
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
                  Explore More
                </button>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;