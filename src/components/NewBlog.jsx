import React from 'react'
import { SlideLeft, SlideRight, Rotate } from '../utility/animation';
import {motion} from 'framer-motion';

const NewBlog = () => {
  return (
     <div className='bg-[#FFFFFF] h-auto w-full pt-25 pb-10 flex flex-col items-center justify-center' style={{ fontFamily: "'Playfair Display', serif" }}>
                 <section className='bg-[#F9F9F9]  min-h-[650px] max-w-[1110px] flex flex-col items-center justify-between pt-25'>
                                <div className='grid grid-cols-2 gap-10 pr-[5rem] pl-[5rem] '>
                                    
                
                                     <div className='flex flex-col items-right justify-center'>
                
                                        <div className='text-right space-y-6'>
                                            <motion.img variants={SlideRight(0.9)} initial="hidden" whileInView="visible" viewport={{once : false}} className='h-full object-cover drop-shadow-2xl' src="/imgi_7_3-Dy86xsud.png" alt="" />
                                        </div>
                
                                    </div>

                                    <div className='flex flex-col py-14 justify-center' style={{ fontFamily: "'Playfair Display', serif" }}>
                
                                        <div className='text-left space-y-4'>
                                            <motion.h1 variants={SlideLeft(0.4)} initial="hidden" whileInView="visible" viewport={{once : false}} className='text-[36px] leading-[42px] font-bold'>
                                               The Importants To Take Care Of Yourself
                                            </motion.h1>
                                            <motion.p  variants={SlideLeft(0.6)} initial="hidden" whileInView="visible" viewport={{once : false}}className='text-[#000] text-[16px] font-normal max-w-[500px] '>The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.</motion.p>
                
                                            <motion.di variants={SlideLeft(0.8)} initial="hidden" whileInView="visible" viewport={{once : false}}v className='flex flex-row gap-5'>
                                                <button className='text-base font-semibold cursor-pointer px-6 py-3 border-2 border-[#FF8901] rounded-[5px] flex flex-row itmes-center justify-center text-white bg-[#FF8901] hover:scale-[1.09] transition ease-in-out duration-300'>Explore More</button>
                                            </motion.di>
                
                                        </div>
                
                                    </div>
                
                                </div>
                
                                
                            </section>
    
            </div>
  )
}

export default NewBlog
