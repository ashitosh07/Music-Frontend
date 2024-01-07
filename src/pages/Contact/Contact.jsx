import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'
import '../../components/PrimaryBtn.css'
import '../shared/Shared.css'
import { motion, useAnimation } from 'framer-motion'
import { contactAnimation } from '../../hooks/useAnimation'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const navigate = useNavigate()
  const form = useRef()
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [viewDiv, setViewDiv] = useState(false)
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      setViewDiv(true)
    } else {
      setViewDiv(false)
    }
  }, [inView, animation])

  const handleSend = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'itsproali_portfolio',
        'itsproali_portfolio',
        form.current,
        'H-ispiDvwdbG_76iq'
      )
      .then(
        (result) => {
          console.log(result.text)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Message has been sent',
            showConfirmButton: false,
            timer: 1500,
          })
          navigate('/')
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <div className='parent py-20 md:p-20 flex flex-col-reverse md:flex-row p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 flex-col-reverse'>
        <div
          className=''
          ref={ref}
          initial='hidden'
          animate={viewDiv && 'visible'}
          variants={contactAnimation}
        >
          <div
            className='form-container'
            style={{
              borderRadius: '10px',
              backgroundColor: '#111111',
            }}
          >
            <form
              ref={form}
              onSubmit={handleSend}
              style={{
                // border: '2px solid',
                borderImage:
                  'linear-gradient(to right, #0a0d0b, #1c3e2a, #237349, #22ad69, #12eb8b) 2 0',
              }}
            >
              <div className='form-group' style={{ marginBottom: '6px' }}>
                <label htmlFor='name'>Name</label>
                <input
                  className='input-field'
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                  required
                  style={{
                    color: 'black',
                    backgroundColor: 'white',
                  }}
                />
              </div>
              <div className='form-group' style={{ marginBottom: '6px' }}>
                <label htmlFor='email'>Email</label>
                <input
                  className='input-field'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  required
                  style={{ color: 'black', backgroundColor: 'white' }}
                />
              </div>
              <div className='form-group' style={{ marginBottom: '6px' }}>
                <label htmlFor='phone'>Phone</label>
                <input
                  className='input-field'
                  type='text'
                  name='phone'
                  id='phone'
                  placeholder='Phone'
                  required
                  style={{ color: 'black', backgroundColor: 'white' }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='Description'>Description</label>
                <textarea
                  className='input-field'
                  name='Description'
                  id='Description'
                  cols='30'
                  rows='5'
                  placeholder='Description'
                  required
                  style={{ color: 'black', backgroundColor: 'white' }}
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        <div
          className='flex flex-col  items-start justify-center p-6'
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && 'visible'}
          variants={contactAnimation}
        >
          <h1
            className='text-3xl font-medium'
            style={{
              marginBottom: '20px',
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: '36px',
              marginRight: '40%',
            }}
          >
            Simply dummy text of the printing and
          </h1>
          <p
            className='text-1xl font-medium'
            style={{
              color: '#B3B3B3',
              marginBottom: '40px',
              marginRight: '10%',
            }}
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was
          </p>

          <div
            className='flex items-center'
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <a href='' target='_blank'>
              <button className='primary-button'>
                <span
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  Login
                </span>
              </button>{' '}
            </a>{' '}
            <a href='' target='_blank'>
              <button className='primary-button' style={{ marginLeft: '25px' }}>
                <span
                  style={{
                    color: 'black',
                    fontWeight: '600',
                  }}
                >
                  Book a Call
                </span>
              </button>{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
