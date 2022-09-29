import React from 'react'
import './Hero.scss';
import {images} from '../../constants';
import {FaGithub, FaLinkedinIn, FaFileAlt, FaEnvelope} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='app__hero'>
      <div className='app__hero-content'>
        <div className='app__hero-tagline'>
          <h1>Hi, I'm <span>Madiha</span> <br />
            <span>Software Engineer</span> and <br /> <span>Designer</span> 
          </h1>
          <div className='app__hero-sociallinks'>
            <a href="https://www.linkedin.com/in/madiha-javed-1321a2146/" target="_blank"><FaLinkedinIn /></a>
            <a href="https://github.com/mfbjaved" target="_blank"><FaGithub /></a>
            <a href="mailto: mfbjaved@gmail.com"><FaEnvelope /></a>
            <a href="#"><FaFileAlt /></a>
          </div>
          <p className='app__hero-secondarytext'>
          I am a life long learner, polyglot, and hobbyist photographer. I love being crafty taking up new projects ranging from sewing to crochet.  <a href="#">Read full about me.</a>
          </p>
        </div>
        <div className='app__hero-image'>
          <img id='selfImage' src={images.cartoonSelf} alt="Cartoonized Madiha"/>
          <img id="pinkCircle" src={images.pinkCircle} alt="Pink Circle"/>
          
        </div>
        <img id="pinkGraident" src={images.pinkRadialGradient} alt="Pink Gradient"/>
        <img id="whiteLine" src={images.whiteLine} alt="White line"/>
      </div>
    </div>
  )
}

export default Hero