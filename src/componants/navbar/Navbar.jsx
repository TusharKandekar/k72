import React from 'react'

export const Navbar = () => {
    return (
        <div className='w-full flex items-start justify-between fixed top-0 left-0 z-50'>
            <div className='w-[13vw] p-4'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 120 60">
                    <path fill="#ffffff" fill-rule="evenodd"
                        d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                </svg>
            </div>
            <div className='w-[16vw] h-14 flex items-center justify-end relative overflow-hidden hover:cursor-pointer group'>
              <div className='flex flex-col h-full w-full items-end justify-center px-7 gap-1 bg-black'>
                <div className='w-16 bg-white h-[1.5px] relative z-10 group-hover:bg-black'></div>
                <div className='w-8 bg-white h-[1.5px] relative z-10 group-hover:bg-black'></div>
              </div>
              <div className='w-full h-full bg-[#d3fd50] absolute -top-[100%] group-hover:top-0 transition-all duration-300'></div>
            </div>
        </div>
    )
}
