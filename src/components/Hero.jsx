import React from 'react'
import Navbar from './Navbar'
import { FaPlay } from "react-icons/fa6";
import { SlideLeft, SlideRight, Rotate } from '../utility/animation';
import {motion} from 'framer-motion'


const Hero = () => {
    return (
        <div className='bg-[url("/imgi_24_bg-BiCRh3MN.png")] h-auto w-full bg-center bg-cover overflow-hidden'>
            <Navbar />
            <section>
                <div className='grid grid-cols-2 min-h-[650px] max-w-[1280px] pr-[5rem] pl-[5rem] '>
                    <div className='flex flex-col py-14 justify-center' style={{ fontFamily: "'Playfair Display', serif" }}>

                        <div className='text-left space-y-6'>
                            <motion.h1 variants={SlideRight(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} className='text-[60px] font-bold'>
                                Gym Gives you the perfect <span className='text-[#ff8901]'>Health</span>
                            </motion.h1>
                            <motion.p variants={SlideRight(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} className='text-[#6A717C] text-[16px] font-normal max-w-[500px] '>It is a long established fact that a reader will be by readable content of a page when are the best product.</motion.p>

                            <motion.div variants={SlideRight(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} className='flex flex-row gap-5'>
                                <button className='text-base font-semibold cursor-pointer px-6 py-3 border-2 border-[#FF8901] rounded-[5px] flex flex-row itmes-center justify-center text-white bg-[#FF8901] hover:scale-[1.09] transition ease-in-out duration-300'>Order Now</button>

                                <button className='text-base text-black font-semibold cursor-pointer px-6 py-2 rounded-[5px] flex items-center justify-center gap-2'>
                                    <FaPlay />  Watch Now
                                </button>
                            </motion.div>

                        </div>

                    </div>

                     <div className='flex flex-col items-center justify-center'>

                        <div className='text-left space-y-6'>
                            <motion.img variants={Rotate(0.2)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }} className='w-[550px] drop-shadow-2xl' src="/imgi_1_dumbell-Bcy4gPfV.png" alt="" />
                        </div>

                    </div>

                </div>

                
            </section>

        </div>
    )
}

export default Hero
