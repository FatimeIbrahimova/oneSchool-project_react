import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
     <div className='nav'>
       <h1>OneSchool</h1>
       <div className='nav-list'>
         <ul>
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/dashboard"><li>Dashboard</li></NavLink>
          <NavLink to="/programs"><li>Programs</li></NavLink>
          <NavLink to="/teacher"><li>Teachers</li></NavLink>
         </ul>
       </div>
       <div>
         <NavLink to="/contact"><button  className='contact-btn'>Contact Us</button></NavLink>
       </div>
     </div>
    </>
  )
}

export default Navbar