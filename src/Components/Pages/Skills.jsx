import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";


import react from "./../../assets/React.png";
import Node from "./../../assets/Node.js.png";
import Mongo from "./../../assets/MongoDB.png";
import HTML from "./../../assets/HTML5.png";
import JavaScript from "./../../assets/JavaScript.png";
import CSS from "./../../assets/CSS3.png";
import Tailwind from "./../../assets/Tailwind.png";
import Git from "./../../assets/Git.png";
import GitHub from "./../../assets/GitHub.png";
import Express from "./../../assets/Express.png";
import Redux from "./../../assets/Redux.png";
import Postgre from "./../../assets/Postgre.png";
import Prisma from "./../../assets/Prisma.png";
import Redis from "./../../assets/Redis.png";


const skills = [
  { name: "MongoDB", category: "Database", image: Mongo },
  { name: "Express", category: "Backend", image: Express },
  { name: "React", category: "Frontend", image: react },
  { name: "Node", category: "Backend", image: Node },
  { name: "PostgreSql", category: "Database", image: Postgre },
  { name: "Redis", category: "Database", image: Redis },
  { name: "Redux", category: "State Managment", image: Redux },
  { name: "Prisma Orm", category: "ORM", image: Prisma },
  { name: "HTML5", category: "Frontend", image: HTML },
  { name: "CSS3", category: "Styling", image: CSS },
  { name: "Tailwind", category: "Styling", image: Tailwind },
  { name: "JavaScript", category: "Frontend", image: JavaScript },
  { name: "Git", category: "Version Control", image: Git },
  { name: "GitHub", category: "Platform", image: GitHub },
];

const Skills = () => {
  return (
    <section className="md:p-24 p-10 md:h-screen bg-gray-900 text-white">
      <div className="flex flex-col justify-center items-center md:gap-10">

        {/* Heading */}
        <div className="flex flex-col justify-center items-center mb-10 text-center">
          <h1 className="md:text-2xl text-xl mb-4 font-semibold">
            <span className="text-yellow-500 text-4xl">-</span> My Skills
          </h1>

          <h2 className="text-3xl md:text-6xl mb-3 font-semibold italic text-yellow-500">
            Exploring the Skills
          </h2>

          <h1 className="text-3xl md:text-6xl mb-10 font-bold underline">
            Behind My Sites
          </h1>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full max-w-6xl"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="h-56 w-full rounded-xl px-3 py-5 flex flex-col gap-2 justify-center items-center bg-gray-800 hover:bg-gray-700 hover:scale-105 transition duration-300 shadow-lg">

                <img
                  src={skill.image}
                  className="mb-4 w-20 h-20 object-contain"
                  alt={skill.name}
                />

                <h1 className="text-yellow-400 text-lg font-bold">
                  {skill.name}
                </h1>

                <p className="text-sm text-gray-300 font-medium text-center">
                  {skill.category}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Skills;