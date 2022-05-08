import React, { useEffect } from 'react'
import { StyledHome, Intro, Types, Body, Header } from './Home.styled'
import profilePic from '../assets/profile.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
    Aos.refresh()
  }, [])

  return (
    <StyledHome>
      <Header>
        <Intro>
          <h1>Amber Chen</h1>
          <h2>Cloud Engineer</h2>
        </Intro>
        <div className='welcome' data-aos='fade-up' data-aos-once='true'>
          <h1>Welcome, I'm Amber </h1>
          <div className='titles'>
            <h2>I'm a ... &nbsp;</h2>
            <Types>
              <span>Cloud Engineer</span>
              <span>Problem Solver</span>
              <span>INTJ</span>
            </Types>
          </div>
        </div>

        <img
          src={profilePic}
          alt='profile_picture'
          data-aos='fade-up'
          data-aos-once='true'
        />
      </Header>

      <Body>
        <p className='about_me'>
          Hi, I'm Amber legal name Ya Chen. Currently resides in Southern
          California, I'm a Cloud Engineer specializes in AWS. I love learning
          about different subjects and growing my knowlege in Tech.
        </p>
        <p>
          I would love to connect with you, feel free to reach out or send me a
          message by clicking the button below!
        </p>
        <button className='contact'>Contact Me</button>
        <div className='social_icons'></div>
      </Body>
    </StyledHome>
  )
}

export default Home
