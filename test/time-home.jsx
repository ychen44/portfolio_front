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

  const [txtCount, setTxtCount] = useState(1)
  const delay = 5000
  useEffect(() => {
    setTimeout(() => {
      setTxtCount(txtCount === 1 || txtCount < 3 ? txtCount + 1 : 1)
    }, delay)
  }, [txtCount])

  return (
    // data-aos='fade-up' data-aos-once='true'
    <StyledHome>
      <Header>
        <Intro>
          <h1>Amber Chen</h1>
          <h2>Cloud Engineer</h2>
        </Intro>
        <div className='welcome'>
          <h1>Welcome, I'm Amber</h1>
          <div className='titles'>
            {/* <h2>I'm a ... &nbsp;</h2> */}
            <Types className='wrapper'>
              <div className='wrapper'>
                <span className={txtCount === 1 ? 'typing active' : 'typing'}>
                  Cloud Engineer
                </span>
                <span className={txtCount === 2 ? 'typing active' : 'typing'}>
                  Problem Solver
                </span>
                <span className={txtCount === 1 ? 'typing active' : 'typing'}>INTJ</span>
              </div>
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
        <h1>ABOUT ME </h1>
        <p className='about_me'>
          Hi, I'm Amber legal name Ya Chen. Currently resides in Southern
          California, I'm a Cloud Engineer certified in AWS Solutions Architect
          – Associate and AWS DevOps Engineer – Professional.
        </p>
        <p>
          I would love to connect, feel free to reach out or send me a message
          by clicking the button below!
        </p>
        <button className='contact'>Contact Me</button>
        <div className='social_icons'></div>
      </Body>
    </StyledHome>
  )
}

export default Home
