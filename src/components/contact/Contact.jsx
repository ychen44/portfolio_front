import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { StyledContact, Container, Form } from './Contact.styled'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as Yup from 'yup'

import Aos from 'aos'
import 'aos/dist/aos.css'

import useWindowDimensions from '../../hooks/useWindowDimension'

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
    Aos.refresh()
  }, [])
  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last name is required'),
    phoneNumber: Yup.string()
      .required('Phone number is required')
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Phone Number must be a valid number in the format xxx-xxx-xxxx'
      ),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    message: Yup.string()
      .min(6, 'Please add more information ')
      .required('Message is required'),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  // thank you form
  const [show, setShow] = useState(true)
  const toggleShow = () => setShow(!show)

  const [submitError, setSubmitError] = useState(false)
  const toggleError = () => setSubmitError(!submitError)

  const onSubmit = (data) => {
    const x = JSON.stringify(data)
    console.log(data, `${process.env.REACT_APP_API_DEV}/dev/inquiry`)
    const resp = axios
      .post(`${process.env.REACT_APP_API_DEV}/dev/inquiry`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
        response.status === 200 && toggleShow()
        console.log(response)
        console.log(response.status)
      })
      .catch(function (response) {
        toggleError()
        console.log(response)
      })
  }

  const { width } = useWindowDimensions()
  return (
    <StyledContact id='contact'>
      <Container>
        <div className='header'>
          <h1 className={show ? 'show' : 'hidden'}>CONTACT</h1>
          <h2 className={show ? 'show' : 'hidden'}>
            Please fill out the form below and I will get back to you as soon as
            possible!
          </h2>
        </div>
        <Form
          data-aos='flip-down'
          data-aos-once='true'
          className={show ? 'show' : 'hidden'}
          onSubmit={handleSubmit(onSubmit)}
        >
          <p>
            <span>*</span> Required fields
          </p>

          <div className='input-fields'>
            <label htmlFor='firstName'>First Name</label>
            <div className='input'>
              <input
                type='text'
                placeholder={
                  width >= 500
                    ? 'First Name *'
                    : 'Please enter your first name *'
                }
                id='firstName'
                {...register('firstName')}
                className={`form-control ${
                  errors.firstName ? 'is-invalid' : ''
                }`}
              />
              <div className='invalid-feedback'>
                {errors.firstName?.message}
              </div>
            </div>
          </div>

          <div className='input-fields'>
            <label htmlFor='lastName'>Last Name</label>
            <div className='input'>
              <input
                type='text'
                placeholder={
                  width >= 500 ? 'Last Name *' : 'Please enter your last name *'
                }
                id='lastName'
                {...register('lastName')}
                className={`form-control ${
                  errors.lastName ? 'is-invalid' : ''
                }`}
              />
              <div className='invalid-feedback'>{errors.lastName?.message}</div>
            </div>
          </div>

          <div className='input-fields'>
            <label htmlFor='email'>E-Mail</label>
            <div className='input'>
              <input
                type='email'
                placeholder={
                  width >= 500 ? 'e-mail *' : 'Please enter your email *'
                }
                id='email'
                {...register('email')}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              <div className='invalid-feedback'>{errors.email?.message}</div>
            </div>
          </div>

          <div className='input-fields'>
            <label htmlFor='phoneNumber'>Phone</label>
            <div className='input'>
              <input
                type='tel'
                placeholder='ex. xxx-xxx-xxxx *'
                id='phoneNumber'
                {...register('phoneNumber')}
                className={`form-control ${
                  errors.phoneNumber ? 'is-invalid' : ''
                }`}
              />
              <div className='invalid-feedback'>
                {errors.phoneNumber?.message}
              </div>
            </div>
          </div>

          <div className='input-fields'>
            <label htmlFor='message'>Message</label>
            <div className='input'>
              <textarea
                type='text'
                placeholder='Let us know what you need help with!'
                id='message'
                {...register('message')}
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              />
              <div className='invalid-feedback'>{errors.message?.message}</div>
            </div>
          </div>

          <div className='button-fields'>
            <button type='button' onClick={() => reset()} className='reset'>
              Reset
            </button>

            <button className='submit' bg='#ff0099' color='#fff' size='2vw'>
              Submit
            </button>
          </div>
          <div className={submitError ? 'submit-error' : 'hidden'}>
            *** We are sorry, there seems to be an error. Please reset and
            re-submit form! ***
          </div>
        </Form>

        <div className={show ? 'hidden' : 'thankyou'}>
          <h2>Thank You!</h2>
          <IconContext.Provider value={{ size: '65px', color: '#72b883' }}>
            <AiFillCheckCircle />
          </IconContext.Provider>
        </div>
      </Container>
    </StyledContact>
  )
}

export default Contact
