import React from 'react'
import { Link } from 'react-router-dom'

export const HomeBottomText = () => {
  return (
    <div className='w-full flex items-center justify-center text-white uppercase gap-6'>

      <Link to="/projects" className='text-[7vw] border-[3px] border-white rounded-full px-6 pb-0 pt-5 leading-[4.9vw] hover:text-[#d3fd50] hover:border-[#d3fd50]'>work</Link>
      <Link to="/agence" className='text-[7vw] border-[3px] border-white rounded-full px-6 pb-0 pt-5 leading-[4.9vw] hover:text-[#d3fd50] hover:border-[#d3fd50]'>agency</Link>
      
    </div>
  )
}
