import React, { useState } from "react";
import { FaDumbbell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Home", "Trainer", "Program", "Blogs", "Pricing"];

  return (
    <nav className="w-full px-5 sm:px-8 lg:px-12 xl:px-20 pt-5 sm:pt-7 lg:pt-8">
      
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <div className="flex flex-row gap-3 items-center">
          <FaDumbbell className="w-6 h-6 sm:w-7 sm:h-7" />

          <div className="flex flex-row gap-2 text-[21px] sm:text-[24px] font-bold">
            <p>CODERS</p>
            <p className="text-[#fb923c]">GYM</p>
          </div>
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden lg:block">
          <ul className="flex flex-row gap-8 xl:gap-12 items-center justify-center">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="
                    text-[16px]
                    text-[#6A717C]
                    font-medium
                    hover:text-[#ff8901]
                    transition
                    ease-in-out
                    duration-300
                  "
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden lg:flex flex-row gap-3 items-center justify-center">

          {/* Search */}
          <button
            className="
              text-2xl
              cursor-pointer
              hover:bg-[#ff8901]
              hover:text-white
              rounded-full
              p-2
              transition
              duration-300
            "
          >
            <CiSearch />
          </button>

          {/* Cart */}
          <button
            className="
              text-2xl
              cursor-pointer
              hover:bg-[#ff8901]
              hover:text-white
              rounded-full
              p-2
              transition
              duration-300
            "
          >
            <IoCartOutline />
          </button>

          {/* Login */}
          <button
            className="
              text-base
              text-[#FF8901]
              font-semibold
              cursor-pointer
              px-5
              xl:px-6
              py-2
              border-2
              border-[#FF8901]
              rounded-[5px]
              flex
              items-center
              justify-center
              hover:text-white
              hover:bg-[#FF8901]
              transition
              duration-300
            "
          >
            Login
          </button>

        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
            lg:hidden
            text-3xl
            cursor-pointer
            text-[#0D1321]
            p-1
          "
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div
          className="
            lg:hidden
            mt-5
            bg-white
            rounded-xl
            shadow-xl
            p-5
            border
            border-gray-100
          "
        >
          {/* Mobile Links */}
          <ul className="flex flex-col gap-4">

            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    block
                    text-[16px]
                    text-[#6A717C]
                    font-medium
                    hover:text-[#ff8901]
                    transition
                    duration-300
                    py-1
                  "
                >
                  {link}
                </a>
              </li>
            ))}

          </ul>

          {/* Mobile Actions */}
          <div className="flex flex-row gap-3 items-center mt-5 pt-5 border-t border-gray-200">

            {/* Search */}
            <button
              className="
                text-2xl
                cursor-pointer
                hover:bg-[#ff8901]
                hover:text-white
                rounded-full
                p-2
                transition
                duration-300
              "
            >
              <CiSearch />
            </button>

            {/* Cart */}
            <button
              className="
                text-2xl
                cursor-pointer
                hover:bg-[#ff8901]
                hover:text-white
                rounded-full
                p-2
                transition
                duration-300
              "
            >
              <IoCartOutline />
            </button>

            {/* Login */}
            <button
              className="
                text-sm
                text-[#FF8901]
                font-semibold
                cursor-pointer
                px-5
                py-2
                border-2
                border-[#FF8901]
                rounded-[5px]
                flex
                items-center
                justify-center
                hover:text-white
                hover:bg-[#FF8901]
                transition
                duration-300
              "
            >
              Login
            </button>

          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;