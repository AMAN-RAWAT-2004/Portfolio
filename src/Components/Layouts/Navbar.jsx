import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

const Navbar = () => {
  const navref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // ✅ GSAP animation
  useGSAP(() => {
    gsap.from(navref.current, {
      opacity: 0,
      y: -100,
      duration: 0.6,
    });

    SplitText.create(".nav-link", {
      type: "words",
      onSplit(self) {
        gsap.from(self.words, {
          y: 50,
          opacity: 0,
          stagger: 0.05,
          duration: 0.6,
        });
      },
    });
  });

  return (
    <section>
      {/* ✅ NAVBAR */}
      <nav
        ref={navref}
        className="z-50 flex items-center justify-between w-full px-6 h-20 bg-green-900"
      >
        {/* 🔹 LOGO */}
        <div>
          <h1 className="text-3xl font-bold text-yellow-500">
            Portfolio
          </h1>
        </div>

        {/* 🔹 DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-8 ">
          <Link to="/" className="nav-link text-white hover:text-yellow-400 text-lg uppercase">
            Home
          </Link>
          <Link to="/service" className="nav-link text-white hover:text-yellow-400 text-lg uppercase">
            Services
          </Link>
          <Link to="/about" className="nav-link text-white hover:text-yellow-400 text-lg uppercase">
            About
          </Link>
          <Link to="/skills" className="nav-link text-white hover:text-yellow-400 text-lg uppercase">
            Skills
          </Link>
          <Link to="/projects" className="nav-link text-white hover:text-yellow-400 text-lg uppercase">
            Projects
          </Link>
        </div>

        {/* 🔹 CONTACT BUTTON */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contactme"
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-transparent hover:text-white border transition"
          >
            Contact
          </Link>
        </div>

        {/* 🔹 MOBILE MENU BUTTON */}
        <button
          onClick={handleToggle}
          className="text-2xl text-white md:hidden ml-auto"
        >
          <GiHamburgerMenu />
        </button>
      </nav>

      {/* ✅ MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={handleToggle}
          className="text-2xl absolute top-5 right-5 text-black"
        >
          <IoCloseSharp />
        </button>

        {/* MENU LINKS */}
        <div className="flex flex-col items-center justify-center h-full gap-6">
          <Link to="/" onClick={handleToggle} className="text-green-900 text-lg">
            Home
          </Link>
          <Link to="/service" onClick={handleToggle} className="text-green-900 text-lg">
            Services
          </Link>
          <Link to="/about" onClick={handleToggle} className="text-green-900 text-lg">
            About
          </Link>
          <Link to="/skills" onClick={handleToggle} className="text-green-900 text-lg">
            Skills
          </Link>
          <Link to="/projects" onClick={handleToggle} className="text-green-900 text-lg">
            Projects
          </Link>

          <Link
            to="/contactme"
            onClick={handleToggle}
            className="bg-black text-white px-6 py-2 rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;