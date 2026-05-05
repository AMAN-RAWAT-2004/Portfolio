import React, { useRef } from "react";
import Portfolio from "./../../assets/PROFILE.jpeg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      x: 200,
      duration: 1,
    });
  });

  return (
    <section className="bg-gray-200 md:bg-white px-6 py-10 border-b">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 md:h-screen">

        {/* TEXT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">

          <h3 className="font-semibold text-xl md:text-3xl mb-4">
            Hello There
          </h3>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            I'm <span className="text-yellow-500">Amandeep Rawat,</span> Web
            Developer Based in IND.
          </h1>

          <p className="text-base md:text-lg mb-6">
            I'm a web developer. I work on MERN stack with Tailwind and build
            real-world projects.
          </p>

          <div className="flex flex-row gap-4 flex-wrap justify-center md:justify-start">
            <button className="bg-green-900 px-4 py-2 md:px-6 rounded-full text-white font-semibold hover:bg-transparent hover:border hover:border-black hover:text-black transition">
              View My Portfolio
            </button>

            <button className="bg-yellow-500 px-4 py-2 md:px-6 rounded-full text-white font-semibold hover:bg-transparent hover:border hover:text-black transition">
              Hire Me
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center items-center">
          <div
            ref={imageRef}
            className="w-52 h-52 md:w-80 md:h-80 bg-yellow-500 rounded-full overflow-hidden"
          >
            <img
              src={Portfolio}
              className="w-full h-full object-cover"
              alt="profile"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;