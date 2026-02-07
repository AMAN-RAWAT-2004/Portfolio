import React, { useRef } from "react";
import Portfolio from "./../../assets/Portfolio.png";
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react'
gsap.registerPlugin(useGSAP)

const Hero = () => {
  const imageRef=useRef(null)
 useGSAP(()=>{
    gsap.from(imageRef.current,{
      opacity:0,
      x:200,
      duration:1,
    })
  })
 
  return (
    <section  className="relative z-0 bg-gray-200 px-6 py-10 md:bg-white ">
      <div  className=" flex-col md:flex md:flex-row w-full mt-15 md:justify-center md:gap-40 items-center md:h-screen">
        <div className=" flex flex-col h-full mb-10 justify-center items-center  ">
          <h3  className="nav font-semibold text-center text-2xl md:text-3xl md:text-left w-140 mb-4">
            Hello There 
          </h3>
          <h1 className="nav md:text-5xl text-4xl text-center font-bold md:w-140 mb-6 md:text-left ">
            I'm <span className="text-yellow-500">Amandeep Rawat,</span>Web
            Developer Based in IND.
          </h1>
          <p className="nav text-lg md:w-140  text-center md:text-left mb-6">
            I'm a web developer.I worked on mern stack with the understanding of
            Tailwind too and can make real world projects.
          </p>
          <div className="w-140 flex flex-row justify-center md:justify-start items-center gap-5">
            <button className="bg-green-900 duration-300 md:px-6 md:py-2 rounded-full px-4 py-1 md:text-lg font-semibold hover:bg-transparent hover:border hover:border-black hover:text-black text-white">
              View My Portfolio
            </button>
            <button className="hover:border duration-300  hover:bg-transparent px-4 py-1 hover:text-black md:text-lg  md:px-6 md:py-2 rounded-full text-white bg-yellow-500">
              Hire Me
            </button>
          </div>
        </div>
        <div className="flex   md:h-full justify-center items-center">
          <div ref={imageRef} className="w-70 h-70 md:w-100 md:h-100 bg-yellow-500 overflow-hidden  rounded-full ">
            <img
              src={Portfolio}
              className="w-85 h-85 md:w-100 md:h-120 object-cover"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
