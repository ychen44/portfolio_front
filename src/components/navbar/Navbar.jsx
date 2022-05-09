import React, { useState, useEffect } from 'react'
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiFillHome,
AiOutlineFundProjectionScreen
} from 'react-icons/ai'


import { GrPersonalComputer } from "react-icons/gr";
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
            <p>About Me</p>
          </div>
        </li>
        <li>
          <div className='selection'>
            <GrPersonalComputer />
            <p>Projects</p>
          </div>
        </li>
        <li>
          <div className='selection'>
            <MdSchool />
            <p>Background</p>
          </div>
        </li>
        <li>
          <div className='selection'>
            <MdSchool />
            <p>Contact Me</p>
          </div>
        </li>
      </ul>
    </Menu>
  )

  return (
    <StyledNav>
      <Container>
        <div className='logo'></div>
        <div className='icons'>
          {/* <div className='social'>
            <AiOutlineMail />
            <AiOutlinePhone />
          </div> */}
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
