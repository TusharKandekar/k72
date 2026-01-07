import React from 'react'
import homeVideo from '../../assets/videos/home-video.mp4'


export const Video = () => {
  return (
    <div className="w-full h-full">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={homeVideo}
      />
    </div>
  )
}
