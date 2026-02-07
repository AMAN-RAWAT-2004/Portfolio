import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react'
import {SplitText} from 'gsap/SplitText';
gsap.registerPlugin(useGSAP,SplitText)

const Navbar = () => {
  const navref=useRef(null)
  const [isOpen,setIsOpen]=useState(false)

  const handleToggle=()=>{
    setIsOpen(!isOpen)

  }
  useGSAP(()=>{
    gsap.from(navref.current,{
      opacity:0,
      y:-200,
      duration:0.6,
    })
    SplitText.create(".nav",{
      type:"lines,words",
      mask:"lines",
      autoSplit:true,
      onSplit(self){
        gsap.from(self.words,{
          y:100,
          opacity:0,
          duration:1,
          
        })
      }
    })
   
  })
  return (
    <section className='' >
    <nav ref={navref} className='nav fixed z-10 flex flex-row w-screen md:rounded-full gap-20 justify-center md:flex-row md:gap-20  items-center  md:justify-center py-4 px-6 h-20 bg-green-900' >
         <div >
          <h1 className="text-5xl text-center font-bold text-yellow-500 "> Portfolio</h1>
         </div>
         {/* Desktop Links */}
      <div className="hidden md:flex  space-x-6">
        <Link to='/' className='uppercase text-sm py-4 px-6  text-white hover:text-yellow-500 hover:underline transition duration-300'>
        Home
        </Link>
        <Link to='/service' className='uppercase text-sm py-4 px-6  text-white hover:text-yellow-500 hover:underline transition duration-300'>
        Services
        </Link>
        <Link to='/about' className='uppercase text-sm py-4 px-6  text-white hover:text-yellow-500 hover:underline transition duration-300'>
        About
        </Link>
        <Link to='/skills' className='uppercase text-sm py-4 px-6  text-white hover:text-yellow-500 hover:underline transition duration-300'>
        Skills
        </Link>
        <Link to='/projects' className='uppercase text-sm py-4 px-6  text-white hover:text-yellow-500 hover:underline transition duration-300'>
        projects
        </Link>
        
      </div>
      <div className="hidden md:flex md:w-full justify-center items-center">
  <Link
    to="/contactme"
    className="text-black bg-white uppercase text-sm rounded-3xl py-3 px-5 hover:bg-transparent transition duration-300 hover:text-white border"
  >
    Contact Us
  </Link>
</div>
      
      <button onClick={handleToggle} className='text-2xl text-white md:hidden'>
          <GiHamburgerMenu />
      </button>
      </nav>
      {/* Button for mobile menu */}
      
      
      
      <div   className={`fixed z-10  h-full bg-white sm:w-1/2 md:w-1/3 w-3/4 top-0 left-0 transform transition-transform duration-300 ${isOpen ? 'translate-x-0':'-translate-x-full'} md:hidden`}>
       <nav className=" space-y-4 px-4  pt-20 flex flex-col justify-center items-center   ">
            <Link to='/' onClick={handleToggle} className='uppercase text-lg py-4 px-6 font-semibold text-green-900 hover:text-yellow-500 hover:underline transition duration-300'>
        Home
        </Link>
        <Link to='/service' onClick={handleToggle} className='uppercase text-lg py-4 px-6 font-semibold text-green-900 hover:text-yellow-500 hover:underline transition duration-300'>
        Services
        </Link>
        <Link to='/about' onClick={handleToggle} className='uppercase text-lg py-4 px-6 font-semibold text-green-900 hover:text-yellow-500 hover:underline transition duration-300'>
        About
        </Link>
        <Link to='/skills' onClick={handleToggle} className='uppercase text-lg py-4 px-6 font-semibold text-green-900 hover:text-yellow-500 hover:underline transition duration-300'>
        Skills
        </Link>
        <Link to='/projects' onClick={handleToggle} className='uppercase text-lg py-4 px-6 font-semibold text-green-900 hover:text-yellow-500 hover:underline transition duration-300'>
        projects
        </Link>
        <div className=' w-full flex justify-center items-center'>
         <Link to='/contactme' className=' text-white border absolute  bottom-10 bg-black uppercase text-sm rounded-3xl py-3 px-5 hover:bg-transparent transition duration-300 hover:text-white '>
        Contact Us
        </Link>
      </div>
        </nav>
        <button onClick={handleToggle} className='text-2xl absolute top-5 right-5  text-black md:hidden'>
          <IoCloseSharp/>
      </button>
      </div>
      </section>
    
  )
}

export default Navbar
