import React from 'react'
import { StyledIcon } from './Resume.styled'
import { ImProfile } from 'react-icons/im'

function ResumeIcon() {
  return (
    <StyledIcon>
      <a
        href='https://portfolio-ya-chen.s3.amazonaws.com/resume/Resume_11_2021.pdf'
        target='_blank'
      >
        <ImProfile className='icon' />
        <span className='download'>Resume</span>
      </a>
    </StyledIcon>
  )
}

export default ResumeIcon
