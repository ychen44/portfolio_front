import React, { useState, useEffect } from 'react'
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiFillHome,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai'

import { FaDesktop, FaIdCard, FaGithub } from 'react-icons/fa'

import { GrPersonalComputer } from 'react-icons/gr'
import { MdOutlineClose, MdSchool } from 'react-icons/md'
import { IoMenu } from 'react-icons/io5'
import { StyledNav, Container, Menu, Body, Header } from './Navbar.styled'
import useWindowDimensions from '../../hooks/useWindowDimension'

function Navbar() {
  const { width } = useWindowDimensions()

  // display drop down menu
  const [displayMenu, setDisplayMenu] = useState(false)
  const menuButton = (e) => {
    setDisplayMenu(!displayMenu)
  }

  // change navbar color based on scroll
  const [navbar, setNavBar] = useState(false)
  const changeNavBackground = () => {
    if (window.scrollY >= 200) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }
  window.addEventListener('scroll', changeNavBackground)

  const menu = (
    <Menu onClick={menuButton}>
      <ul>
        <li>
          <div className='selection'>
            <AiFillHome />
            <a href='#home'>About Me</a>
          </div>
        </li>
        <li>
          <div className='selection'>
            <FaDesktop />
            <a href='#contact'>Projects</a>
          </div>
        </li>
        <li>
          <div className='selection'>
            <MdSchool />
            <a href='#contact'>Background</a>
          </div>
        </li>
        <li>
          <div className='selection'>
            <FaIdCard />
            <a href='#contact'>Contact</a>
          </div>
        </li>

        <div className='social'>
          <a href='https://www.linkedin.com/in/yachen0404/' target='_blank'>
            <AiFillLinkedin />
          </a>
          <a href='https://github.com/ychen44' target='_blank'>
            <FaGithub />
          </a>

          {/* <AiOutlineMail />
          <AiOutlinePhone /> */}
        </div>
      </ul>
    </Menu>
  )

  return (
    <StyledNav>
      <Container>
        <div className='logo'></div>
        <div className='icons'>
          {displayMenu ? (
            <MdOutlineClose onClick={menuButton} />
          ) : (
            <IoMenu onClick={menuButton} />
          )}
        </div>

        {displayMenu && menu}
      </Container>
    </StyledNav>
  )
}

export default Navbar
