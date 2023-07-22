import React from 'react'
import './header.css'
import CTA from './CTA'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Junlong Chen</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <div className='header__socials'>
          <a href="https://www.linkedin.com/in/junlong-chen-9b173322a/" target="_blank"><BsLinkedin /></a>
          <a href="https://github.com/alexisname?tab=repositories" target="_blank"><FaGithub /></a>
        </div>
        {/* <HeaderSocials /> */}

        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

        {/* <a href="#contact" className = 'scroll__down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header