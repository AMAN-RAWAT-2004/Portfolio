import React from 'react'

import Hero from '../Common/Hero';
import Services from './Services';
import About from './About'
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';
const Home = () => {
  return (
    <section >
      
      <Hero/>
      <Services/>
      <About/>
      <Skills/>
      <Projects/>
      {/* <ContactMe/> */}
    </section>
  );
};

export default Home
