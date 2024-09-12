import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
   <div className="about container">
        <div className="about-left">
            <img src={about} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='playicon-img'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, officia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, officia.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, officia.</p>
        </div>
   </div>
  )
}

export default About