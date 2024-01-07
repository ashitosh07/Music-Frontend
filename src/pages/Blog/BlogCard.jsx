import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { allMusicDetailsData } from './MusicJson'
import { AudioContext } from './AudioContext'
import Modal from 'react-modal'
import DonationForm from './DonationForm'

Modal.setAppElement('#root')
function BlogCard() {
  //paypal
  const [checkout, setCheckOut] = useState(false)
  //paypal

  //music
  const { audioMap, handlePlayPause } = useContext(AudioContext)
  //music

  //donation
  const [showDonationForm, setShowDonationForm] = useState(false)
  const [selectedSong, setSelectedSong] = useState(null)

  // Example function to handle the "Donate" button click for a specific song
  const handleDonateClick = (song) => {
    setSelectedSong(song)
    setShowDonationForm(true)
  }

  const handleCloseDonationForm = () => {
    setSelectedSong(null)
    setShowDonationForm(false)
  }

  //
  const [displayedData, setDisplayedData] = useState(
    allMusicDetailsData.slice(0, 6)
  )
  const [searchTerm, setSearchTerm] = useState('')

  const handleViewMore = () => {
    setDisplayedData(allMusicDetailsData)
  }

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filteredData = allMusicDetailsData.filter(
      (data) =>
        data.name.toLowerCase().includes(term) ||
        data.title.toLowerCase().includes(term) ||
        data.description.toLowerCase().includes(term)
    )
    setDisplayedData(filteredData)
  }

  return (
    <>
      {' '}
      <div className='bg-black'>
        <div className='max-w-8xl mx-auto lg:px-2'>
          <div className='flex flex-col items-center justify-center mt-16 bg-black'>
            <h1
              className='text-4xl font-semibold mb-2 text-center p-4 pt-8'
              style={{ fontSize: '51.56px' }}
            >
              Music
            </h1>

            <div className='flex flex-wrap justify-center gap-8 mb-20 m-10'>
              {displayedData.map((data, index) => (
                <div
                  key={index}
                  className='bg-black p-6 rounded-md shadow-md text-left lg:w-72 relative'
                >
                  <img
                    src={data.cover}
                    alt={`Blog Image ${index + 1}`}
                    className='w-full h-auto rounded-md mb-4 relative'
                  />

                  {/* Play/Pause icon */}
                  <div
                    className='play-pause-icon absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    onClick={() => handlePlayPause(data)}
                  >
                    {audioMap.get(data.id) && !audioMap.get(data.id).paused ? (
                      <FontAwesomeIcon icon={faPause} size='3x' />
                    ) : (
                      <FontAwesomeIcon icon={faPlay} size='3x' />
                    )}
                  </div>

                  <div className='text-white font-semibold text-1xl mb-2'>
                    {data.title}
                  </div>
                  <p className='text-gray-400 ' style={{ fontSize: '12px' }}>
                    {data.description}
                  </p>
                  <button
                    className='text-white'
                    onClick={() => handleDonateClick(data)}
                    style={{
                      backgroundColor: '#357b00',
                      padding: '3px 18px',
                      marginTop: '10px',
                      borderRadius: '10px',
                    }}
                  >
                    Donate
                  </button>
                </div>
              ))}
            </div>

            {/* Donation Modal */}
            <Modal
              isOpen={showDonationForm}
              onRequestClose={handleCloseDonationForm}
              className='donate-modal'
              overlayClassName='donate-overlay'
            >
              {showDonationForm && (
                <DonationForm
                  onClose={handleCloseDonationForm}
                  currentSong={selectedSong}
                />
              )}
            </Modal>

            {displayedData.length < allMusicDetailsData.length && (
              <button
                className='text-white  px-4 py-2 rounded-md mb-24'
                onClick={handleViewMore}
                style={{ backgroundColor: '#8dce19' }}
              >
                View More
              </button>
            )}
          </div>{' '}
        </div>{' '}
      </div>
    </>
  )
}

export default BlogCard
