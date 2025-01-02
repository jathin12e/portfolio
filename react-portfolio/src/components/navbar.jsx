import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'

const navbar = () => {
  return (
    <div> 
        <nav class="navbar navbar-expand-lg navbar-light">
          <h1 className='center'>MJ</h1>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <Link activeClass='active' to="home"  spy={true} smooth={true} offset={-100} duration={500} ><li>Home</li></Link>
              <Link activeClass='active' to="about"  spy={true} smooth={true} offset={-100} duration={500} ><li>About</li></Link>
              <Link activeClass='active' to="project"  spy={true} smooth={true} offset={-100} duration={500} ><li>Projects</li></Link>
              <Link activeClass='active' to="contact"  spy={true} smooth={true} offset={-100} duration={500} ><li>Contact</li></Link>
              
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default navbar