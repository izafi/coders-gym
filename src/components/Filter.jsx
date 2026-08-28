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
    <div className="bg-[#FFFFFF] h-auto w-full pt-16 sm:pt-20 lg:pt-25 pb-10 px-4 sm:px-6 lg:px-8">
      
      <section className="w-full max-w-[1280px] mx-auto">
        
        <div className="flex flex-col gap-8">

          {/* ================= TABS ================= */}
          <div className="flex flex-wrap gap-3 items-center justify-center sm:justify-start pl-0 sm:pl-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  text-sm
                  sm:text-base
                  font-normal
                  cursor-pointer
                  px-4
                  py-2
                  rounded-[5px]
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  ${
                    activeTab === tab
                      ? "text-white bg-[#FF8901]"
                      : "text-[#374151] bg-[#E5E7EB] hover:bg-[#d1d5db]"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ================= CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={SlideUp(0.2 + index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="
                  flex
                  flex-col
                  gap-4
                  items-start
                  justify-between
                  h-full
                  p-3
                  bg-white
                  rounded-[8px]
                  cursor-pointer
                  border-[2px]
                  border-[#E5E7EB]
                  shadow-xl
                  hover:shadow-2xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                
                {/* Image */}
                <div className="flex flex-col gap-3 items-start justify-center w-full">
                  <img
                    className="
                      rounded-t-[8px]
                      object-cover
                      object-center
                      w-full
                      h-[220px]
                      sm:h-[240px]
                      lg:h-[250px]
                    "
                    src={product.image}
                    alt={product.title}
                  />

                  {/* Title */}
                  <h1
                    className="
                      text-black
                      text-[20px]
                      sm:text-[22px]
                      lg:text-[24px]
                      font-semibold
                      text-left
                    "
                  >
                    {product.title}
                  </h1>
                </div>

                {/* Category */}
                <p className="text-[#6b7280] text-[14px] sm:text-[16px] font-normal text-left">
                  {product.category}
                </p>

              </motion.div>
            ))}

          </div>

          {/* No Products */}
          {filteredProducts.length === 0 && (
            <div className="w-full flex items-center justify-center py-20">
              <p className="text-gray-500 text-lg">
                No products found.
              </p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Filter;