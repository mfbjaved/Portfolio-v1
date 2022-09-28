import React from 'react'

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='app__navbar'>
        <ul className='app__navbar-links'>
            {['Home', 'Projects', 'Articles', 'Skills'].map( (item) =>
            (<li className='app__flex p-text' key={`link-${item}`}>
                <b><a href = {`#${item}`}>{item}</a></b>
            </li>))}
        </ul>
    </nav>
  )
}

export default Navbar