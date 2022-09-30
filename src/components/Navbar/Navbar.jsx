import React, {useState, useEffect }from 'react'
import { motion} from "framer-motion"
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import { SocialLinks } from '../';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
        console.log(scrollCheck)
      }
    })
  })
  


  return (
    <nav className='app__navbar'>
        <ul className={ scroll ? 'app__navbar-links scroll' : 'app__navbar-links'}>
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
              <li className="app__navbar-menu-socialLinks">
                <SocialLinks />
              </li>
            </ul>
          </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar