import React from 'react'
import {FaGithub, FaLinkedinIn, FaFileAlt, FaEnvelope} from 'react-icons/fa'

const SocialLinks = () => {
    return (
        <>
            <a href="https://www.linkedin.com/in/madiha-javed-1321a2146/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com/mfbjaved" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="mailto: mfbjaved@gmail.com"><FaEnvelope /></a>
            <a href="MadihaJavedResume.pdf" target="_blank" rel="noreferrer"><FaFileAlt /></a>
        </>
    )
}

export default SocialLinks