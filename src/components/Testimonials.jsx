import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import { SlideLeft, SlideRight, SlideUp } from '../utility/animation';
import {motion} from 'framer-motion';
const Testimonials = () => {
    return (
        <div className='bg-[#FFFFFF] h-auto w-full pt-25 pb-25'>
            <section>
                <div className='flex flex-col gap-8 items-left justify-center h-[70%] pr-[4rem] pl-[4rem]'>
                    <div className='flex flex-row gap-3 items-left justify-start pl-5'>
                        <h1 className='text-black leading-[40px] text-[36px] w-[450px] font-bold text-left'>What Are The Costumer Saying About Us</h1>
                    </div>

                    <div className='grid grid-cols-3 gap-10 min-h-[300px] max-w-[1280px]'>

                        {/* box 1 */}
                        <motion.div variants={SlideUp(0.4)} initial="hidden" viewport={{once:false}}
                                                whileInView="visible"  className='w-85 flex flex-col items-start bg-[#FFF3E5] shadow-2xl rounded-[12px] p-8 group cursor-pointer'>
                            <div className='h-20 w-full flex flex-row justify-start items-center gap-5 mb-2 overflow-hidden'>
                                <img className='h-16 object-cover rounded-full' src="/imgi_8_104.jpg" alt="project-image" />
                                <div className='flex flex-col items-start justify-center'>
                                    <h1 className='text-[20px] text-[#1e2939] font-bold loading-[28px]'>John Doe</h1>
                                    <h2 className='text-[16px] text-[#000] font-normal loading-[24px]'>John Doe</h2>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-start pt-5'>
                                <p className='text-[16px] text-start text-[#4a5565] font-normal loading-[24px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat optio, recusandae sapiente expedita veniam?</p>
                                <div className="flex items-center mt-3 gap-1 text-[18px]">
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                </div>
                            </div>
                        </motion.div>

                         {/* box 2 */}
                        <motion.div variants={SlideUp(0.6)} initial="hidden" viewport={{once:false}}
                        whileInView="visible"  className='w-85 flex flex-col items-start bg-[#FFF3E5] shadow-2xl rounded-[12px] p-8 group cursor-pointer'>
                            <div className='h-20 w-full flex flex-row justify-start items-center gap-5 mb-2 overflow-hidden'>
                                <img className='h-16 object-cover rounded-full' src="/imgi_9_1000-103x103.jpg" alt="project-image" />
                                <div className='flex flex-col items-start justify-center'>
                                    <h1 className='text-[20px] text-[#1e2939] font-bold loading-[28px]'>Steve Smith</h1>
                                    <h2 className='text-[16px] text-[#000] font-normal loading-[24px]'>Steve Smith</h2>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-start pt-5'>
                                <p className='text-[16px] text-start text-[#4a5565] font-normal loading-[24px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat optio, recusandae sapiente expedita veniam?</p>
                                <div className="flex items-center mt-3 gap-1 text-[18px]">
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                </div>
                            </div>
                        </motion.div>


                         {/* box 3 */}
                        <motion.div variants={SlideUp(0.9)} initial="hidden" viewport={{once:false}}
                        whileInView="visible"  className='w-85 flex flex-col items-start bg-[#FFF3E5] shadow-2xl rounded-[12px] p-8 group cursor-pointer'>
                            <div className='h-20 w-full flex flex-row justify-start items-center gap-5 mb-2 overflow-hidden'>
                                <img className='h-16 object-cover rounded-full' src="/imgi_10_101.jpg" alt="project-image" />
                                <div className='flex flex-col items-start justify-center'>
                                    <h1 className='text-[20px] text-[#1e2939] font-bold loading-[28px]'>Kristen</h1>
                                    <h2 className='text-[16px] text-[#000] font-normal loading-[24px]'>Kristen</h2>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-start pt-5'>
                                <p className='text-[16px] text-start text-[#4a5565] font-normal loading-[24px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat optio, recusandae sapiente expedita veniam?</p>
                                <div className="flex items-center mt-3 gap-1 text-[18px]">
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                    <span className="text-yellow-400"><LiaStarSolid /></span>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>


            </section>

        </div>
    )
}

export default Testimonials
