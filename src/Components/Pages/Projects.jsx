import React from "react";
import GossipGo from "./../../assets/GossipGo.png";
import SpotifyClone from './../../assets/SpotifyClone.png'
import Rabbit from './../../assets/Rabbit.png'
import FrameSewa from './../../assets/FrameSewa.png'
import { Link, useNavigate } from "react-router-dom";
const projects = [
  {
    id: 1,
    name: "1. Chat Web App (Real-Time)",
    url: "https://gossip-go-wp7k.vercel.app/",
    for: ["Real Time", "Socket.io", "Web App"],
    coverImage: GossipGo,
  },
  {
    id: 2,
    name: "2. Spotify Clone",
    url: "https://gadwalify-ns8s.vercel.app/",
    for: ["Redis cache", "Backend", "Web App"],
    coverImage: SpotifyClone,
  },
  {
    id: 3,
    name: "3. E-commerce Clothing Website ",
    url: "https://rabbit-i6zh.vercel.app/",
    for: ["E-Commerce", "PayPal Integration", "Full-Stack"],
    coverImage: Rabbit,
  },
   {
    id: 4,
    name: "4. E-commerce Frame Website ",
    url: "https://magical-arithmetic-584a76.netlify.app/#",
    for: ["E-Commerce", "Web Design", "UI Design"],
    coverImage: FrameSewa,
  },
];

const Projects = () => {
  const navigate=useNavigate()
  const handleProjectNavigation=()=>{
      navigate('/projects')
  }
  return (
    <section className="md:p-24 p-10">
      <div>
        <h1 className="text-2xl text-center md:text-left mb-4 font-semibold">
          <span className="text-yellow-500 text-4xl">-</span> My Portfolio
        </h1>
      </div>
      <div className="md:flex flex-col md:flex-row md:w-full justify-center md:justify-between items-center mb-10 ">
        <h1 className="text-center font-bold md:text-left text-3xl md:text-5xl mb-10 md:font-semibold italic">
          <span className="text-yellow-500">My Latest</span> Projects
        </h1>
        <div className="flex justify-center items-center">
          <button onClick={handleProjectNavigation} className="bg-green-900  px-6 py-2 rounded-full text-lg font-semibold hover:bg-transparent hover:border hover:border-black hover:text-black text-white">
            View My Projects
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8  w-full">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.url}
            className=" rounded-lg flex flex-col gap-8 md:h-200 border border-gray-600/20  bg-gray-400/20 transition-all duration-150 hover:bg-gray-500/20 py-10 px-4"
          >
              <h1 className="text-black font-bold text-3xl px-4 ">{project.name}</h1>
            
            <div className="md:flex grid grid-cols-2 md:flex-row justify-start px-4 gap-4">
              {project.for.map((tag, index) => (
                <div
                  key={index}
                  className="bg-yellow-500 text-xs md:text-sm  text-white px-2 py-1 rounded"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="flex justify-center items-start w-full ">
              <img
                src={project.coverImage}
                alt="coverImage"
                className="md:w-150 w-100 h-100 md:h-150 rounded-lg"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
