import React from 'react'
import { motion } from 'framer-motion'
import './About.css'
import '../../components/PrimaryBtn.css'
import '../shared/Shared.css'
import badges from './badges'
import Aboutme from '../../assets/Aboutme.png'
const h1Styles = {
  color: 'white',
  fontWeight: 'bold',
  fontSize: '36px',
}

const mediaQueryStyles = {
  textAlign: 'center', // Default style
}

const About = () => {
  if (window.innerWidth <= 540) {
    mediaQueryStyles.textAlign = 'left'
  } else if (window.innerWidth >= 600) {
    mediaQueryStyles.textAlign = 'center'
  }
  return (
    <div
      className='parent pt-16 my-16'
      style={{ backgroundColor: 'black', borderRadius: '40px' }}
    >
      <div className='flex justify-center items-center p-4'>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-8'>
          <p style={{ ...h1Styles, ...mediaQueryStyles }}>About</p>
          <div className='centered-container'>
            <p className='text-neutral font-medium'>
              Michael Foster along with his wife Denisa and their two sons
              Adoniram and Abishai are currently serving as missionaries in the
              country of Romania and currently reside in the city of Oradea.
              Their heart is to see the gospel go forth, disciples made, and
              God’s church built.
            </p>
            <br />
            <p className='text-neutral font-medium'>
              Before being called into missions full-time Michael was actively
              involved in music ministry where he toured the United States
              playing and ministering to humble-sized audiences. In 2010 Michael
              hung up all of his musical endeavors with zero intention of ever
              picking up a microphone or instrument to record another song.
            </p>
            <br />
            <p className='text-neutral font-medium'>
              in the fall of 2022 that all changed when Michael found himself
              burned out, tired, and in many ways in a state of crisis and in
              need of an outlet for his thoughts, reflections, and emotions. On
              an early October evening Michael randomly came across the beat
              that is now the song “Reflections” and within thirty minutes had
              written the chorus. After an hour wrote the first verse, and
              before he knew it had the full song. The experience was so deeply
              therapeutic for him that he decided to actually record it so that
              he could have it as both a keepsake and as a sort of medicinal
              painkiller for his current state.
            </p>
            <br />
            <p className='text-neutral font-medium'>
              This one evening set off a chain reaction in Michael that led to a
              musical explosion that he didn’t even know was waiting to detonate
              inside of him. It has led to this current project that Denisa has
              convinced him to share with others through a tax-deductible
              donation to the work God is doing through them in Romania and
              around the world.
            </p>{' '}
            <p className='text-neutral font-medium'>
              It is their prayer that the music will be enjoyed by those who
              listen to it, and in some small way perhaps even impact a life or
              two.
            </p>
          </div>
        </div>
      </div>
      {/* add a img only for mobile */}
      {/* <div className='md:hidden text-center p-4'>
      
        <img src={Aboutme} alt='Mobile Only' className='mx-auto' />
        <h1
          style={{
            color: 'black',
            fontSize: '26.73px',
            fontWeight: 'bold',
            marginTop: '12px',
          }}
        >
          Anwesh Shetty
        </h1>
      </div> */}
    </div>
  )
}

export default About
