import React from 'react'
import './about.css'
import ME from '../../assets/image11.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>7+ Years Working in International Companies</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Credentials</h5>
              <small>Master of Science in Applied Computer Science (Advanced Computer Programming)</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>CGPA</h5>
              <small>3.94/4.00</small>
            </article>
          </div>

          <p>
          Following the completion of my undergraduate and postgraduate studies in the field of Mechanical Engineering, I have amassed seven years of professional experience in the automotive industry. Throughout this time, I discovered my passion for software development, leading me to embark upon a Master's degree in Computer Science. As a result, I have acquired the proficiency to construct comprehensive projects, as well as to develop Android applications and games employing Java and C#. 
          </p>

          <a href="#contact" className='btn btn_primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About