import React from "react";

const Cta = () => {
  return (
    <div className="bg-[#FFFFFF] h-auto w-full pt-10 pb-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      
      <section
        className="
          bg-[#F9F9F9]
          w-full
          max-w-[1110px]
          min-h-[350px]
          flex
          flex-col
          items-center
          justify-center
          px-5
          sm:px-8
          lg:px-12
          py-12
          sm:py-14
          lg:py-16
        "
      >
        
        <div className="flex flex-col items-center justify-center w-full">
          
          <div className="flex flex-col items-center gap-5 text-center">
            
            {/* Heading */}
            <h1
              className="
                text-[28px]
                sm:text-[36px]
                md:text-[42px]
                lg:text-[48px]
                leading-[34px]
                sm:leading-[42px]
                md:leading-[48px]
                lg:leading-[52px]
                w-full
                max-w-[850px]
                font-bold
                uppercase
              "
            >
              Get 20% Discount On Your First Order, Are You Ready To Buy
            </h1>

            {/* Paragraph */}
            <p
              className="
                text-[#000]
                text-[14px]
                sm:text-[15px]
                lg:text-[16px]
                font-normal
                leading-6
                max-w-[650px]
              "
            >
              We will make sure you get the right and the best quality
              products for your workout
            </p>

            {/* Buttons */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
                sm:gap-5
                items-center
                justify-center
                pt-2
              "
            >
              {/* Learn More */}
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
                Learn More
              </button>

              {/* Stay In Touch */}
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
                  text-[#FF8901]
                  bg-white
                  hover:bg-[#FF8901]
                  hover:text-white
                  transition
                  ease-in-out
                  duration-300
                "
              >
                Stay In Touch
              </button>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default Cta;