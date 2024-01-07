// Banner.jsx

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../Banner/Banner.css'
import cage from '../../../assets/Cage.jpg'

const Banner = () => {
  return (
    <div
      className='banner-container'
      style={{ backgroundImage: `url(${cage})` }}
    >
      {/* Right side (text) */}
      <div className='banner-text-container'>
        <div>
          <h1>Music for everyone</h1>
          <p>Without music, life would be a mistake</p>
          <Link to={'/home'} className='btn'>
            Start Listening
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
