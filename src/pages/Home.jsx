import React from 'react'
import { Video } from '../componants/home/Video.jsx'
import { HomeBottomText } from '../componants/home/HomeBottomText.jsx'
import { HomeHeroText } from '../componants/home/HomeHeroText.jsx'
import { HomeMiddleText } from '../componants/home/HomeMiddleText.jsx'
import { FullScreenNav } from '../componants/navbar/FullScreenNav.jsx'

const Home = () => {
  return (
    <div className='h-screen w-screen  relative overflow-x-hidden'>
      <FullScreenNav />
      <div className='w-full h-full fixed top-0 left-0 -z-10'>
        <Video />
      </div>
      <div className='w-full relative flex flex-col'>
        <div className='w-full flex flex-col iems-center justify-center h-screen'>
          <HomeHeroText />
          <HomeMiddleText />
        </div>
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home