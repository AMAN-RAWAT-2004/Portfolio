import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

import { FaNode } from "react-icons/fa";
import { TbNorthStar } from "react-icons/tb";

import { FaJs } from "react-icons/fa";



const Services = () => {
  return (
    <section  >
        {/* <div className='w-full flex justify-center items-center bg-yellow-500 h-20'>
           <h1 className='text-4xl text-black flex justify-center items-center gap-20 font-bold' >
             
            </h1>
        </div> */}
      <div className='md:p-20 pt-15 md:m-10'>
        <div>
            <h1 className="text-2xl text-center md:text-left mb-4 font-semibold"><span className='text-yellow-500 text-4xl'>-</span> Services</h1>
        </div>
        <div className='md:flex flex-col md:flex-row md:w-full justify-center md:justify-between items-center mb-10 '>
            <h1 className="text-center font-bold md:text-left text-3xl md:text-5xl mb-10 md:font-semibold italic"><span className="text-yellow-500">Services</span> I Provide</h1>
            <div className='flex justify-center items-center'>
                 <button className='bg-green-900  px-6 py-2 rounded-full text-lg font-semibold hover:bg-transparent hover:border hover:border-black hover:text-black text-white'>
                    View All Services
                </button>
            </div>
           
            </div>
        <div className='md:w-full w-3/4 flex-col md:flex pl-18  justify-center md:flex-row  md:gap-20 items-center'>
            <div className="flex mb-4 flex-col w-70 md:w-90 bg-gray-200 md:justify-start md:items-start p-6 rounded-2xl">
                <div className='mb-6 bg-white w-15 h-15 rounded-full flex items-center justify-center'><FaReact className='text-4xl text-blue-400 '/></div>
                <h1 className='text-3xl mb-4 font-bold text-green-950'>Frontend UI</h1>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos distinctio beatae.</p>
                <h2 className="text-lg flex items-center gap-2 font-bold w-full text-green-900">Learn more<FaArrowRightLong className='text-center text-yellow-500'/></h2>
            </div>
            <div className="flex mb-4 flex-col w-70 md:w-90 bg-gray-200 md:justify-start md:items-start p-6 rounded-2xl">
                <div className='mb-6 bg-white w-15 h-15 rounded-full flex items-center justify-center'><FaNode className='text-4xl text-green-900 '/></div>
                <h1 className='text-3xl mb-4 font-bold text-green-950'>Backend </h1>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos distinctio beatae.</p>
                <h2 className="text-lg flex items-center gap-2 font-bold w-full text-green-900">Learn more<FaArrowRightLong className='text-center text-yellow-500'/></h2>
            </div>
            <div className="flex mb-4 flex-col w-70 md:w-90 bg-gray-200 md:justify-start md:items-start p-6 rounded-2xl">
                <div className='mb-6 bg-white w-15 h-15 rounded-full flex items-center justify-center'><FaJs className='text-4xl text-yellow-500 '/></div>
                <h1 className='text-3xl mb-4 font-bold text-green-950'>FullStack </h1>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos distinctio beatae.</p>
                <h2 className="text-lg flex items-center gap-2 font-bold w-full text-green-900">Learn more<FaArrowRightLong className='text-center text-yellow-500'/></h2>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services
