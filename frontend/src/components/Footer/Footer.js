import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer-left'>
          <h3>ABOUT ONESCHOOL</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur ut hic ipsum et veritatis corrupti. Itaque eius soluta optio dolorum temporibus in, atque, quos fugit sunt sit quaerat dicta.</p>
        </div>
      
      <div className='footer-list'>
        <h3>LINKS</h3>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/dashboard"><li>Dashboard</li></NavLink>
        <NavLink to="/programs"><li>Programs</li></NavLink>
        <NavLink to="/teacher"><li>Teacher</li></NavLink>
      </div>
      <div className='footer-left'>
      <h3>SUBSCRIBE</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt iure iusto architecto? Numquam, natus?</p>
      <form className='form'>
      <input type="text" placeholder='email'/>
      <button className="btn-subscribe">SUBSCRIBE</button>
      </form>
      </div>
      </div>
    </>
  )
}

export default Footer