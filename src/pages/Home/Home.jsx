import React, { useState, useEffect, useRef } from 'react'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { IoChatboxEllipses } from 'react-icons/io5'
import Contact from '../Contact/Contact'
import Project from '../Project/Project'
import Banner from './Banner/Banner'
import Service from './Service/Service'
import Testimonial from './Testimonial/Testimonial'
import About from '../About/About'
import BlogIndex from '../Blog/BlogIndex'
import Blog from '../Blog/Blog'
import BlogDetail from '../Blog/BlogDetail'
import BlogCard from '../Blog/BlogCard'
import NowPlaying from '../Blog/NowPlaying'

const Home = () => {
  return (
    <div>
      <div className='pt-16'>
        <Banner />
        <About />
        <NowPlaying />
        <BlogCard />
        {/*  <Testimonial />
        <Service />
        <Blog />
        <BlogIndex />
        <Project />
        <Contact /> */}
      </div>
    </div>
  )
}

export default Home
