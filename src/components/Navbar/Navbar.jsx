import React, {useState }from 'react'
import { motion, useMotionValue } from "framer-motion"
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {FaGithub, FaLinkedinIn, FaFileAlt, FaEnvelope} from 'react-icons/fa'
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
        <ul className='app__navbar-links'>
            {['Home', 'Projects', 'Articles', 'Skills'].map( (item) =>
            (<li className='app__flex p-text' key={`link-${item}`}>
                <b><a href = {`#${item}`}>{item}</a></b>
            </li>))}
        </ul>
        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={ () => setToggle(true)}/>
          {
            toggle && (
              <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['Home', 'Projects', 'Articles', 'Skills'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li className="app__navbar-menu-socialLinks"><a href="https://www.linkedin.com/in/madiha-javed-1321a2146/" target="_blank"><FaLinkedinIn /></a>
              <a href="https://github.com/mfbjaved" target="_blank"><FaGithub /></a>
              <a href="mailto: mfbjaved@gmail.com"><FaEnvelope /></a>
              <a href="#"><FaFileAlt /></a></li>
            </ul>
          </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar