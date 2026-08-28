import React from 'react'
import { FaDumbbell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";



const Navbar = () => {
  return (
    <div className='flex flex-row justify-evenly items-center gap-25 pt-8'>
      <div className='flex flex-row gap-3 items-center justify-center'>
        <FaDumbbell className='w-6 h-6' />
        <div className='flex flex-row gap-2 text-[24px] font-bold'>
          <p>CODERS</p>
          <p className='text-[#fb923c] '>GYM</p>
        </div>
      </div>

      <div>
        <ul className='flex flex-row gap-4 items-center justify-center gap-12'>
          <a className='text-[16px] text-[#6A717C] font-medium hover:text-[#ff8901] transition ease-in-out duration-300 ' href=""><li>Home</li></a>
          <a className='text-[16px] text-[#6A717C] font-medium hover:text-[#ff8901] transition ease-in-out duration-300 ' href=""><li>Trainer</li></a>
          <a className='text-[16px] text-[#6A717C] font-medium hover:text-[#ff8901] transition ease-in-out duration-300 ' href=""><li>Program</li></a>
          <a className='text-[16px] text-[#6A717C] font-medium hover:text-[#ff8901] transition ease-in-out duration-300 ' href=""><li>Blogs</li></a>
          <a className='text-[16px] text-[#6A717C] font-medium hover:text-[#ff8901] transition ease-in-out duration-300 ' href=""><li>Pricing</li></a>
        </ul>
      </div>

      <div className='flex flex-row gap-4 items-center justify-center gap-5'>
        <button className='text-2xl cursor-pointer hover:bg-[#ff8901] hover:text-white rounded-full p-2 '> <CiSearch /></button>
        <button className='text-2xl cursor-pointer hover:bg-[#ff8901] hover:text-white rounded-full p-2 '><IoCartOutline /></button>
        <button className='text-base text-[#FF8901] font-semibold cursor-pointer px-6 py-2 border-2 border-[#FF8901] rounded-[5px] flex flex-row itmes-center justify-center hover:text-white hover:bg-[#FF8901] duration-300'>
          Login
        </button>

      </div>


    </div>
  )
}

export default Navbar
