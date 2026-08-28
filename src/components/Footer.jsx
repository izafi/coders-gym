import React from 'react'
import { FaDumbbell } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#0D1321] rounded-t-[20px] text-white py-12 px-6 lg:px-32">
            <div className="max-w-6xl mx-auto grid grid-cols-4 pb-10 gap-8">
                <div className='flex flex-col items-start gap-3'>
                    <div className='flex flex-row gap-3 items-center justify-center'>
                        <FaDumbbell className='w-6 h-6' />
                        <div className='flex flex-row gap-2 text-[24px] font-bold'>
                            <p>CODERS</p>
                            <p className='text-[#fb923c] '>GYM</p>
                        </div>
                    </div>
                    <p className="text-white mb-6 w-[90%] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab placeat quaerat doloribus odit perferendis autem blanditiis, nihil pariatur iusto accusamus.</p>

                    <div className='flex flex-row gap-5'>
                        <FaLocationDot className='h-[28px] w-[28px] cursor-pointer' />
                        <FaInstagram className='h-[28px] w-[28px] cursor-pointer' />
                        <BsFacebook className='h-[28px] w-[28px] cursor-pointer' />
                        <FaLinkedin className='h-[28px] w-[28px] cursor-pointer' />
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-medium mb-4">Important Links</h3>
                    <ul className="space-y-3">
                        <li><a href="#Home" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#About" className="text-gray-400 hover:text-white">About</a></li>
                        <li><a href="#Projects" className="text-gray-400 hover:text-white">Services</a></li>
                        <li><a href="#Contact" className="text-gray-400 hover:text-white">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-medium mb-4">Company Links</h3>
                    <ul className="space-y-3">
                        <li><a href="#Home" className="text-gray-400 hover:text-white">Our Servies</a></li>
                        <li><a href="#About" className="text-gray-400 hover:text-white">Contact</a></li>
                        <li><a href="#Projects" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-medium mb-4">Resources</h3>
                    <ul className="space-y-3">
                        <li><a href="#Home" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#About" className="text-gray-400 hover:text-white">About</a></li>
                        <li><a href="#Projects" className="text-gray-400 hover:text-white">Services</a></li>
                        <li><a href="#Contact" className="text-gray-400 hover:text-white">Login</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-600 pt-6 text-center">
                <p className="text-gray-400 text-sm">@copyright 2024 The Coding Journey</p>
            </div>
        </div>
    )
}

export default Footer
