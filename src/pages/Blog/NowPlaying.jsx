import React, { useContext, useEffect, useState } from 'react'
import { AudioContext } from './AudioContext' // Adjust the path accordingly
import { allMusicDetailsData } from './MusicJson'

const NowPlaying = () => {
  const { currentPlayingSong } = useContext(AudioContext)
  const [defaultSong, setDefaultSong] = useState(null)

  useEffect(() => {
    // Set the default song on component mount
    if (
      !currentPlayingSong &&
      allMusicDetailsData &&
      allMusicDetailsData.length > 0
    ) {
      setDefaultSong(allMusicDetailsData[0])
    }
  }, [currentPlayingSong])

  return (
    <div className='bg-black p-16 text-white'>
      <h1 className='text-3xl font-semibold mb-4 text-center'>
        About the Song
      </h1>

      <div className='flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-1/2 pr-0 md:pr-8 mb-4 md:mb-0'>
          <div className='w-full md:w-2/3 mx-auto mb-4'>
            {currentPlayingSong ? (
              <img
                src={currentPlayingSong.cover}
                alt={`Now Playing - ${currentPlayingSong.title}`}
                className='w-full h-auto rounded-md'
              />
            ) : defaultSong ? (
              <img
                src={defaultSong.cover}
                alt={`Default Song - ${defaultSong.title}`}
                className='w-full h-auto rounded-md'
                style={{ height: '250px', width: '300px' }}
              />
            ) : null}
          </div>
        </div>

        <div className='w-full md:w-1/3'>
          {currentPlayingSong || defaultSong ? (
            <div className='text-left'>
              <p
                className='text-lg font-semibold'
                style={{ fontSize: '30px', marginBottom: '10px' }}
              >
                {currentPlayingSong
                  ? currentPlayingSong.title
                  : defaultSong.title}
              </p>
              <p className='text-gray-400 mb-4' style={{ fontSize: '16px' }}>
                {currentPlayingSong
                  ? currentPlayingSong.description
                  : defaultSong.description}
              </p>
              <p className='text-gray-400' style={{ fontSize: '16px' }}>
                {currentPlayingSong
                  ? currentPlayingSong.aboutTheSong
                  : defaultSong.aboutTheSong}
              </p>
            </div>
          ) : (
            <p className='text-left'>No song currently playing</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default NowPlaying
