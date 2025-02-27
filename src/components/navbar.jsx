import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'

const navbar = () => {
  return (
    <div className='nav'> 
        <h1 className='center'>MJ</h1>
        <ul className='p-1'>
          <Link activeClass='active' to="home"  spy={true} smooth={true} offset={-100} duration={500} ><li>Home</li></Link>
          <Link activeClass='active' to="about"  spy={true} smooth={true} offset={-100} duration={500} ><li>About</li></Link>
          <Link activeClass='active' to="project"  spy={true} smooth={true} offset={-100} duration={500} ><li>Projects</li></Link>
          <Link activeClass='active' to="contact"  spy={true} smooth={true} offset={-100} duration={500} ><li>Contact</li></Link>  
        </ul>
    </div>
  )
}

export default navbar