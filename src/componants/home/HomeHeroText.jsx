import React from 'react'
import { Video } from './Video'

export const HomeHeroText = () => {
  return (
    <div className='w-full  flex flex-col items-center text-white  uppercase  justify-center text-center '>
        <div className='leading-[9vw] text-[9.5vw]'>
            The spark for
        </div>
        <div className='flex items-center justify-center leading-[9vw] text-[9.5vw]'>
            all 
            <div className='h-[7.5vw] w-[15.5vw] rounded-full overflow-hidden'>
             <Video />
            </div>
            things
        </div>
        <div className='leading-[7.5vw] text-[9.1vw]'>
            creative
        </div>
    </div>
  )
}
