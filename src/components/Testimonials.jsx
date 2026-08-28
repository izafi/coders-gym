import React from "react";
import { LiaStarSolid } from "react-icons/lia";
import { SlideUp } from "../utility/animation";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Fitness Enthusiast",
      image: "/imgi_8_104.jpg",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat optio, recusandae sapiente expedita veniam?",
    },
    {
      id: 2,
      name: "Steve Smith",
      role: "Gym Member",
      image: "/imgi_9_1000-103x103.jpg",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat optio, recusandae sapiente expedita veniam?",
    },
    {
      id: 3,
      name: "Kristen",
      role: "Fitness Trainer",
      image: "/imgi_10_101.jpg",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat optio, recusandae sapiente expedita veniam?",
    },
  ];

  return (
    <div
      className="
        bg-[#FFFFFF]
        h-auto
        w-full
        pt-16
        sm:pt-20
        lg:pt-25
        pb-16
        sm:pb-20
        lg:pb-25
        px-4
        sm:px-6
        lg:px-8
      "
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <section className="w-full max-w-[1280px] mx-auto">

        <div className="flex flex-col gap-8">

          {/* ================= HEADING ================= */}
          <div className="px-1 sm:px-3 lg:px-5">
            <h1
              className="
                text-black
                leading-[34px]
                sm:leading-[40px]
                text-[28px]
                sm:text-[34px]
                lg:text-[36px]
                w-full
                lg:max-w-[500px]
                font-bold
                text-left
              "
            >
              What Are The Customers Saying About Us
            </h1>
          </div>

          {/* ================= TESTIMONIAL CARDS ================= */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
              lg:gap-10
              w-full
            "
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={SlideUp(0.4 + index * 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="
                  w-full
                  flex
                  flex-col
                  items-start
                  bg-[#FFF3E5]
                  shadow-xl
                  rounded-[12px]
                  p-6
                  sm:p-7
                  lg:p-8
                  group
                  cursor-pointer
                  hover:shadow-2xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                {/* ================= USER INFO ================= */}
                <div
                  className="
                    w-full
                    flex
                    flex-row
                    justify-start
                    items-center
                    gap-4
                    mb-2
                  "
                >
                  <img
                    className="
                      h-14
                      w-14
                      sm:h-16
                      sm:w-16
                      object-cover
                      rounded-full
                      shrink-0
                    "
                    src={testimonial.image}
                    alt={testimonial.name}
                  />

                  <div className="flex flex-col items-start justify-center">

                    <h2
                      className="
                        text-[18px]
                        sm:text-[20px]
                        text-[#1e2939]
                        font-bold
                        leading-[26px]
                        sm:leading-[28px]
                      "
                    >
                      {testimonial.name}
                    </h2>

                    <p
                      className="
                        text-[14px]
                        sm:text-[16px]
                        text-[#000]
                        font-normal
                        leading-[22px]
                        sm:leading-[24px]
                      "
                    >
                      {testimonial.role}
                    </p>

                  </div>
                </div>

                {/* ================= REVIEW ================= */}
                <div
                  className="
                    flex
                    flex-col
                    justify-center
                    items-start
                    pt-4
                    sm:pt-5
                  "
                >
                  <p
                    className="
                      text-[14px]
                      sm:text-[15px]
                      lg:text-[16px]
                      text-left
                      text-[#4a5565]
                      font-normal
                      leading-6
                    "
                  >
                    {testimonial.review}
                  </p>

                  {/* ================= STARS ================= */}
                  <div className="flex items-center mt-3 gap-1 text-[18px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="text-yellow-400"
                      >
                        <LiaStarSolid />
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </section>
    </div>
  );
};

export default Testimonials;