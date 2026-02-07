import React from 'react'
import react from './../../assets/React.png'
import Node from './../../assets/Node.js.png'
import Mongo from './../../assets/MongoDB.png'
import HTML from './../../assets/HTML5.png'
import JavaScript from './../../assets/JavaScript.png'
import CSS from './../../assets/CSS3.png'
import Tailwind from './../../assets/Tailwind.png'
import Git from './../../assets/Git.png'
import GitHub from './../../assets/GitHub.png'
import Express from './../../assets/Express.png'
const skills=[
  {
    
    name:'React',
    category:'Frontend',
    image:react,

  },
  {
    
    name:'Node',
    category:'Backend',
    image:Node,

  },
  {
    
    name:'MongoDB',
    category:'DataBase',
    image:Mongo,

  },
  {
    
    name:'Express',
    category:'Backend',
    image:Express,

  },
  {
    
    name:'HTML5',
    category:'Frontend',
    image:HTML,

  },
  {
    
    name:'CSS3',
    category:'Styling',
    image:CSS,

  },
  {
    
    name:'Tailwind',
    category:'Styling',
    image:Tailwind,

  },
  {
    
    name:'JavaScript',
    category:'Frontend',
    image:JavaScript,

  },
  {
    
    name:'Git',
    category:'Version Control',
    image:Git,

  },
  {
    
    name:'GitHub',
    category:'Platform',
    image:GitHub,

  },
]
const Skills = () => {
  return (
    <section className='md:p-24 p-10'>
      <div className="flex flex-col justify-center items-center">
           <div className="flex flex-col justify-center items-center mb-10" >
         <h1 className="md:text-2xl text-xl mb-4 font-semibold"><span className='text-yellow-500 text-4xl'>-</span> My Skills</h1>
         <h2 className="text-4xl md:text-6xl mb-3 font-semibold italic text-yellow-500"> Exploring the Skills</h2>
            <h1 className="text-4xl md:text-6xl mb-10 font-bold underline "> Behind My Sites</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 justify-center gap-15 md:gap-25 ">
            {
              skills.map((skill,index)=>(
                <div className='h-55  w-35 rounded-lg px-2 py-4 flex flex-col gap-2 justify-center items-center bg-gray-200' key={index}>
                  <img src={skill.image} className='mb-4 w-20 h-20' alt={skill.name} />
                  <h1 className='text-yellow-500  text-xl font-bold'>{skill.name}</h1>
                  <h1 className='text-xl text-center text-green-900 font-bold'>{skill.category}</h1>
                </div>
              ))
            }
          </div>
      </div>
     
    </section>
  )
}

export default Skills
