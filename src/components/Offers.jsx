import React from 'react'
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { SlideLeft, SlideRight, Rotate } from '../utility/animation';
import {motion} from 'framer-motion'

const Offers = () => {
    return (
        <div className='bg-[#FFFFFF] h-auto w-full pt-25 pb-10' style={{ fontFamily: "'Playfair Display', serif" }}>
            <section>
                <div className='grid grid-cols-4 gap-5 min-h-[350px] max-w-[1280px] pr-[4rem] pl-[4rem] '>
                    <div className='flex flex-col gap-5 items-left justify-center h-[70%] p-5'>
                        <h1 className='text-black leading-[40px] text-[36px] font-bold text-left'>What we <br /> offer for you</h1>
                        <p className='text-[#6b7280] text-[16px] font-normal text-left'>It is a long established fact that a reader readable.</p>
                    </div>

                    <motion.div variants={SlideLeft(0.4)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }} className='flex flex-col gap-5 items-left justify-center h-[70%] p-5 bg-[#F3F4F6] rounded-[16px] hover:bg-white hover:shadow-2xl'>
                        <div className='flex flex-col gap-5 items-left justify-center'>
                            <GrYoga className='text-black leading-[24px] text-[34px] font-semibold text-left' />

                            <h1 className='text-black text-[24px] font-semibold text-left'>Yoga Equipments</h1>
                        </div>

                        <p className='text-[#6b7280] text-[16px] font-normal text-left'>It is a long established fact that a reader readable.</p>
                    </motion.div>

                    <motion.div variants={SlideLeft(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} className='flex flex-col gap-5 items-left justify-center h-[70%] p-5 bg-[#F3F4F6] rounded-[16px] hover:bg-white hover:shadow-2xl'>
                        <div className='flex flex-col gap-5 items-left justify-center'>
                            <FaDumbbell className='text-black leading-[24px] text-[34px] font-semibold text-left' />

                            <h1 className='text-black leading-[32px] text-[24px] font-semibold text-left'>Muscles Equipments</h1>
                        </div>

                        <p className='text-[#6b7280] text-[16px] font-normal text-left'>It is a long established fact that a reader readable.</p>
                    </motion.div>

                    <motion.div variants={SlideLeft(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} className='flex flex-col gap-5 items-left justify-center h-[70%] p-5 bg-[#F3F4F6] rounded-[16px] hover:bg-white hover:shadow-2xl'>
                        <div className='flex flex-col gap-5 items-left justify-center'>
                            <GiGymBag className='text-black leading-[24px] text-[34px] font-semibold text-left' />

                            <h1 className='text-black leading-[32px] text-[24px] font-semibold text-left'>Fitness Equipments</h1>
                        </div>

                        <p className='text-[#6b7280] text-[16px] font-normal text-left'>It is a long established fact that a reader readable.</p>
                    </motion.div>
                </div>


            </section>

        </div>
    )
}

export default Offers
