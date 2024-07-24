import React from 'react'

import img from "../../../public/images/img-7.jpg"
import img2 from "../../../public/images/img-6.jpg"
import img3 from "../../../public/images/img-5.jpg"

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The value that holds us true and to account</h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center '>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center '>
              <img src={img} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px] '>Simplicity</span>
          </div>
          <p className='text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
              Things being made beautiful simple are at the heart of everything we do.
            </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center '>
              <img src={img2} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px] '>Loyalty</span>
          </div>
          <p className='text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
          'Loyalty is the pledge of truth to oneself and others.' - Ada Velez-Boardley
            </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center '>
              <img src={img3} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px] '>Humanity</span>
          </div>
          <p className='text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            'To deny people their human rights is to challenge their very humanity.' – Nelson Mandela
            </p>
        </div>

      </div>

      <div className='card border-black border-[.5px] mt-[2rem] flex justify-between bg-white p-[5rem] rounded-[10px]'>
        <div>
          <h1 className='text-blue text-[30px] font-bold'>Ready to switch a career</h1>
          <h2 className='text-textColor text-[25px] font-bold'>Let's get started</h2>
        </div>
        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blue hover:bg-white border-blue'>Get Started</button>

      </div>

    </div>
  )
}

export default Value