import React from 'react'
import './Hero.scss';
import {images} from '../../constants';

const Hero = () => {
  return (
    <div className='app__hero'>
      <div className='app__hero-content'>
        <div className='app__hero-tagline'>
          <h1>Hi, I'm <span>Madiha</span> <br />
            <span>Software Engineer</span> and <br /> <span>Designer</span> 
          </h1>
          <div className='app__hero-socialinks'>
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
      </div>
    </div>
  )
}

export default Hero