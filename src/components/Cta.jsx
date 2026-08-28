import React from 'react'

const Cta = () => {
  return (
    <div className='bg-[#FFFFFF] h-auto w-full pt-10 pb-10 flex flex-col items-center justify-center'>
                 <section className='bg-[#F9F9F9]  min-h-[350px] min-w-[1110px] flex flex-col items-center justify-between pt-10 pb-10'>
                                
                                    <div className='flex flex-col py-14 items-center justify-center'>
                
                                        <div className=' flex flex-col items-center gap-5 text-center space-y-4'>
                                            <h1 className='text-[48px] leading-[42px] w-[700px] font-bold uppercase'>
                                               Get 20% Discount On Your First Order, Are You Ready To Buy
                                            </h1>
                                            <p className='text-[#000] text-[16px] font-normal max-w-[650px] '>We will make sure you get the right and the best quality products for your workout</p>
                
                                            <div className='flex flex-row gap-5'>
                                                <button className='text-base font-semibold cursor-pointer px-6 py-3 border-2 border-[#FF8901] rounded-[5px] flex flex-row itmes-center justify-center text-white bg-[#FF8901] hover:scale-[1.09] transition ease-in-out duration-300'>Learn More</button>

                                                <button className='text-base font-semibold cursor-pointer px-6 py-3 border-2 border-[#FF8901] rounded-[5px] flex flex-row itmes-center justify-center text-[#FF8901] bg-[#fffff]'>Stay In Touch</button>
                                            </div>
                
                                        </div>
                
                                    </div>                
                            </section>
    
            </div>
  )
}

export default Cta
