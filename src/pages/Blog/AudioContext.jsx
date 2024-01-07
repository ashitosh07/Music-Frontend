import React, { createContext, useState } from 'react'

const AudioContext = createContext()

const AudioProvider = ({ children }) => {
  const [audioMap, setAudioMap] = useState(new Map())
  const [currentPlayingSong, setCurrentPlayingSong] = useState(null)

  const handlePlayPause = (data) => {
    const currentAudio = audioMap.get(data.id) || new Audio(data.audio)
    const isPlaying = !currentAudio.paused

    // Pause all other audio except the clicked one
    audioMap.forEach((audio) => {
      if (audio !== currentAudio) {
        audio.pause()
      }
    })

    // Toggle play/pause for the clicked audio
    if (isPlaying) {
      currentAudio.pause()
      setCurrentPlayingSong(null) // Reset current playing song when paused
    } else {
      currentAudio.play()
      setCurrentPlayingSong(data) // Set the current playing song
    }

    // Update the audioMap with the updated state
    setAudioMap(new Map(audioMap.set(data.id, currentAudio)))
  }

  return (
    <AudioContext.Provider
      value={{ audioMap, currentPlayingSong, handlePlayPause }}
    >
      {children}
    </AudioContext.Provider>
  )
}

export { AudioContext, AudioProvider }
