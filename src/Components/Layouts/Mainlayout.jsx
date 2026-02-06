import React from 'react'
import Navbar from '../Layouts/Navbar';
import Footer from './../Common/Footer'
import { Outlet } from 'react-router-dom';
const Mainlayout = () => {
  return (
    <div>
      <Navbar/>
      <main>
      <Outlet/>

      </main>
      <Footer/>
    </div>
  )
}

export default Mainlayout
