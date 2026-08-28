import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { FaLocationDot, FaInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D1321] rounded-t-[20px] text-white py-10 sm:py-12 px-5 sm:px-8 lg:px-16 xl:px-32">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10">

        {/* ================= BRAND ================= */}
        <div className="flex flex-col items-start gap-4 sm:col-span-2 lg:col-span-1">

          {/* Logo */}
          <div className="flex flex-row gap-3 items-center">
            <FaDumbbell className="w-6 h-6 sm:w-7 sm:h-7" />

            <div className="flex flex-row gap-2 text-[22px] sm:text-[24px] font-bold">
              <p>CODERS</p>
              <p className="text-[#fb923c]">GYM</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base leading-6 max-w-[400px] lg:max-w-[300px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ab placeat quaerat doloribus odit perferendis autem blanditiis,
            nihil pariatur iusto accusamus.
          </p>

          {/* Social Icons */}
          <div className="flex flex-row gap-4 mt-2">

            <a
              href="#"
              className="hover:text-[#fb923c] transition duration-300"
            >
              <FaLocationDot className="h-6 w-6 sm:h-7 sm:w-7 cursor-pointer" />
            </a>

            <a
              href="#"
              className="hover:text-[#fb923c] transition duration-300"
            >
              <FaInstagram className="h-6 w-6 sm:h-7 sm:w-7 cursor-pointer" />
            </a>

            <a
              href="#"
              className="hover:text-[#fb923c] transition duration-300"
            >
              <BsFacebook className="h-6 w-6 sm:h-7 sm:w-7 cursor-pointer" />
            </a>

            <a
              href="#"
              className="hover:text-[#fb923c] transition duration-300"
            >
              <FaLinkedin className="h-6 w-6 sm:h-7 sm:w-7 cursor-pointer" />
            </a>

          </div>
        </div>

        {/* ================= IMPORTANT LINKS ================= */}
        <div>
          <h3 className="text-xl sm:text-2xl font-medium mb-4">
            Important Links
          </h3>

          <ul className="space-y-3">
            <li>
              <a
                href="#Home"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#About"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#Projects"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#Contact"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* ================= COMPANY LINKS ================= */}
        <div>
          <h3 className="text-xl sm:text-2xl font-medium mb-4">
            Company Links
          </h3>

          <ul className="space-y-3">
            <li>
              <a
                href="#Services"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Our Services
              </a>
            </li>

            <li>
              <a
                href="#Contact"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="#Privacy"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* ================= RESOURCES ================= */}
        <div>
          <h3 className="text-xl sm:text-2xl font-medium mb-4">
            Resources
          </h3>

          <ul className="space-y-3">
            <li>
              <a
                href="#Home"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#About"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#Services"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#Login"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Login
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="mt-4 sm:mt-8 border-t border-gray-600 pt-5 sm:pt-6 text-center">

        <p className="text-gray-400 text-xs sm:text-sm">
          © 2024 The Coding Journey. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;