import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Testimonial.css'
import Reviews from '../../../assets/Reviews'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  headingAnimation,
  sectionBodyAnimation,
} from '../../../hooks/useAnimation'
import BottomLine from '../../../components/BottomLine'

const Testimonial = () => {
  const [ref, inView] = useInView()
  const [viewDiv, setViewDiv] = useState(false)
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      setViewDiv(true)
    } else {
      setViewDiv(false)
    }
  }, [inView, animation])
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className='parent py-12'>
      <div
        className='mb-8'
        initial='hidden'
        animate={viewDiv && 'visible'}
        variants={headingAnimation}
      >
        <h1 className='text-4xl font-semibold text-left text-white ml-8'>
          Services
        </h1>
        <BottomLine />
      </div>

      <div
        ref={ref}
        initial='hidden'
        animate={viewDiv && 'visible'}
        variants={sectionBodyAnimation}
      >
        <Slider {...settings}>
          {Reviews.map((review) => (
            <div key={review.id} className='mt-6 relative'>
              <img
                src={review.img}
                alt='client'
                className='absolute top-0 right-20 w-36 h-36 mr-2'
                style={{ top: '-10%' }}
              />
              <div
                className='mx-4 rounded-lg shadow-xl single-blog cursor-pointer pt-6 flex flex-col justify-between h-[300px]'
                style={{
                  backgroundColor: '#000000',
                  border: '2px solid #7baf1e',
                  marginTop: '5%',
                }}
              >
                <div
                  className='px-6'
                  style={{
                    marginTop: '15%',
                    paddingRight: '20%',
                  }}
                >
                  <h2 className='text-left text-white text-2xl font-bold mb-2'>
                    {review.title}
                  </h2>
                  <p className='text-left text-gray-300 mb-4'>
                    {review.description}
                  </p>
                  <h4 className='text-left' style={{ color: '#7baf1e' }}>
                    {review.buttonName}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial
