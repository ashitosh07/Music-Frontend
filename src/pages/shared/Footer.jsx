import React, { useState } from 'react'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import img from '../../assets/img/notAvailable.png'
import './Footer.css'
const Footer = () => {
  const year = new Date()

  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      fontSize: '18px',
      color: isActive && '#8dce19 !important',
    }
  }
  const [searchText, setSearchText] = useState('')

  const handleInputChange = (e) => {
    setSearchText(e.target.value)
  }
  return (
    <>
      <div className='bg-black'>
        <div className='max-w-7xl mx-auto lg:px-4'>
          <div
            className='w-full h-[2px] '
            style={{ backgroundColor: '#E4E4E4', opacity: 0.2 }}
          ></div>

          <footer
            className='w-full text-center p-6 md:px-16 p-4'
            style={{ backgroundColor: '#000000' }}
          >
            <div className='flex flex-col md:flex-row items-start justify-center mb-6 pt-10 '>
              {/* 1st Column */}
              <div className='md:w-full lg:w-1/3 flex flex-col items-start justify-center mb-6'>
                <div className='w-20'>
                  <img
                    src={img}
                    alt='AS CA'
                    style={{ width: '100%', margin: '20px 0' }}
                  />
                </div>
                <p
                  style={{
                    color: '#B3B3B3',
                    fontSize: '16px',
                    textAlign: 'left',
                  }}
                  // className='pr-10 sm:pr-0'
                >
                  "Dive into our music: a harmony of emotions and storytelling
                  that transcends genres."
                </p>
              </div>

              {/* 2nd Column */}
              <div className=' md:w-full lg:w-1/3 flex flex-row  md:flex-col items-center justify-center pb-4 '>
                <a
                  className='flex items-center text-white hover:text-#8dce19 duration-300 mb-2 lg:mr-0 mr-4'
                  href='#'
                  style={{ activeLink }}
                >
                  About
                </a>
                <a
                  className='flex items-center text-white hover:text-#8dce19 duration-300 mb-2 mr-4 lg:mr-0'
                  href='#'
                  style={{ activeLink }}
                >
                  Contact
                </a>
                <a
                  className='flex items-center text-white hover:text-#8dce19 duration-300 mb-2 md:mb-0'
                  href='#'
                  style={{ activeLink }}
                >
                  Music
                </a>
              </div>

              {/* 3rd Column */}
              <div className='md:w-full lg:w-1/3 flex flex-col  justify-center'>
                {/* Search Bar */}
                <div className='w-full flex items-start mb-4'>
                  <div className='relative flex items-start'>
                    <input
                      type='text'
                      placeholder=''
                      value={searchText}
                      onChange={handleInputChange}
                      className='text-md text-black p-1 border border-gray-300 rounded-md mr-2 pl-8 w-full'
                    />
                    <div className='absolute left-2 top-1/2 transform -translate-y-1/2'>
                      <svg
                        className='w-6 h-4 text-gray-500 dark:text-gray-400'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 20'
                      >
                        <path
                          stroke='#020300'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                        />
                      </svg>
                    </div>
                  </div>
                  <button
                    className='text-md px-3 py-1 bg-blue-500 text-black rounded-md hover:bg-blue-600'
                    style={{ backgroundColor: '#8dce19', fontWeight: 'bold' }}
                  >
                    Search
                  </button>
                </div>

                {/* Social Media Icons */}
                <div className='w-full flex items-start pt-4 pb-4'>
                  <a
                    className='inline-block mx-2'
                    href='#'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaLinkedin className='text-2xl text-blue-400' />
                  </a>
                  <a
                    className='inline-block mx-2'
                    href='#'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaInstagram className='text-2xl text-pink-500' />
                  </a>
                  <a
                    className='inline-block mx-2'
                    href='#'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaFacebook className='text-2xl text-blue-600' />
                  </a>
                </div>
              </div>
            </div>

            {/* Horizontal Line */}
            <div
              className='w-full h-[2px] '
              style={{ backgroundColor: '#E4E4E4', opacity: 0.2 }}
            ></div>

            {/* Copyright Notice */}
            <div className='flex flex-col md:flex-row items-center justify-center mt-4'>
              <p style={{ fontSize: '14px' }}>
                &copy; {year.getFullYear()} , AS CA. All Rights Reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Footer
