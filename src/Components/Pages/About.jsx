import React from 'react'
import Portfolio from './../../assets/Portfolio.png'
const About = () => {
  return (
    <section className='w-full md:h-screen bg-green-900 md:p-20 p-10 mt-15'>
        <div className='md:flex flex-col md:flex-row w-full h-full justify-center items-center'>
          <div className="flex-1 flex justify-center items-center">
            <div className='w-70 h-70 md:w-100 md:h-100 bg-yellow-500 overflow-hidden rounded-full'>
                <img src={Portfolio} className='w-85 h-85 md:w-100 md:h-120 object-cover  ' alt="img" />
            </div>
          </div>
          <div className="flex-1 text-white flex flex-col items-center md:items-left w-full h-full justify-center">
            <h3 className="md:text-2xl text-xl mb-4 font-semibold"><span className='text-yellow-500 text-4xl'>-</span> About Me</h3>
            <h1 className=" md:text-left text-4xl text-center md:text-5xl mb-10 font-semibold italic">Who is<span className="text-yellow-500"> Aman?</span></h1>
            <p className='w-70 text-center md:text-left  mb-10 md:w-140'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis deleniti officia excepturi suscipit nihil incidunt amet facilis reiciendis a dolorem, quae voluptatum debitis ut similique consequatur doloremque voluptatem laborum hic!</p>
            <div className="">
 <button className='bg-yellow-500  px-6 py-2 rounded-full transition duration-300 text-lg font-semibold hover:bg-transparent hover:border hover:border-white  text-white'>
                    Download CV
                </button>
            </div>
           
          </div>
        </div>
    </section>
    
  )
}

export default About
