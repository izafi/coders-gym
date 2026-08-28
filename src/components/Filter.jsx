import React, { useState } from "react";
import { SlideUp } from "../utility/animation";
import { motion } from "framer-motion";

const Filter = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Yoga", "Fitness", "Muscles"];

  const products = [
    {
      id: 1,
      title: "Yoga",
      category: "Yoga",
      image: "/imgi_3_1-BIkZI8kX.png",
    },
    {
      id: 2,
      title: "Dumbbells",
      category: "Fitness",
      image: "/imgi_4_2-GA8HnIcz.png",
    },
    {
      id: 3,
      title: "Yoga Mat",
      category: "Yoga",
      image: "/imgi_5_3-qzw4f8AR.png",
    },
    {
      id: 4,
      title: "Fitness Mat",
      category: "Fitness",
      image: "/imgi_6_4-C2Y78JXs.png",
    },
    {
      id: 5,
      title: "Muscle Roller",
      category: "Muscles",
      image: "/imgi_3_1-BIkZI8kX.png",
    },
    {
      id: 6,
      title: "Weight Equipment",
      category: "Muscles",
      image: "/imgi_4_2-GA8HnIcz.png",
    },
    {
      id: 7,
      title: "Yoga Block",
      category: "Yoga",
      image: "/imgi_5_3-qzw4f8AR.png",
    },
  ];

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <div className="bg-[#FFFFFF] h-auto w-full pt-25 pb-10">
      <section>
        <div className="flex flex-col gap-8 items-start justify-center h-[70%] pr-[4rem] pl-[4rem]">

          {/* Tabs */}
          <div className="flex flex-row gap-3 items-center justify-start pl-5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-base font-normal cursor-pointer px-4 py-2 rounded-[5px] flex items-center justify-center transition-all duration-300 ${
                  activeTab === tab
                    ? "text-white bg-[#FF8901]"
                    : "text-[#374151] bg-[#E5E7EB] hover:bg-[#d1d5db]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-5 min-h-[350px] max-w-[1280px]">

            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={SlideUp(0.2 + index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="flex flex-col gap-5 items-start justify-center h-auto p-3 bg-white rounded-[8px] cursor-pointer border-[2px] border-[#E5E7EB] shadow-2xl"
              >
                <div className="flex flex-col gap-2 items-start justify-center w-full">

                  <img
                    className="rounded-t-[8px] object-cover object-center w-full"
                    src={product.image}
                    alt={product.title}
                  />

                  <h1 className="text-black text-[24px] font-semibold text-left">
                    {product.title}
                  </h1>

                </div>

                <p className="text-[#6b7280] text-[16px] font-normal text-left">
                  {product.category}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Filter;