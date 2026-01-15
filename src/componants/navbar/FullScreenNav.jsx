import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { NavContext } from '../common/NavContext.jsx'

export const FullScreenNav = () => {
    const stairingParentRef = React.useRef(null)
    const { isOpen, setIsOpen } = React.useContext(NavContext)  // use context properly
    const FullNavLinkRef = React.useRef(null)
    const MainNav = React.useRef(null)
    const FullNavRef = React.useRef(null)
function GsapAnimation() {
  const tl = gsap.timeline()

  // 1. Show only stair layers
  tl.set(MainNav.current, { display: 'flex' })
  tl.set(FullNavRef.current, { opacity: 0 })

  // 2. Animate stairs down
  tl.from('.stairing', {
    height: 0,
    stagger: { amount: -0.25 }
  })
  // 4. Reveal nav content AFTER stairs
  tl.to(FullNavRef.current, {
    opacity: 1,
    duration: 0.2
  })

  // 3. Slide stairs away
  tl.to('.stairing', {
     delay: 0.2,
    y: '100%',
    stagger: { amount: -0.25 }
  })


  // 5. Remove stairs
  tl.set(stairingParentRef.current, { display: 'none' })

  // Reset stairs for next open
  tl.set('.stairing', { y: '0%' })

  // Animate links
  tl.from('.link', {
    rotateX: 90,
    stagger: { amount: 0.2 }
  })
}

    useGSAP(() => {

        if (isOpen) {
            MainNav.current.style.display = 'flex'
            GsapAnimation()
        } else {
            MainNav.current.style.display = 'none'
            // tl.reverse()
        }


    }, [isOpen])

    return (
<div
  ref={MainNav}
  className="fixed inset-0 z-40 hidden overflow-hidden bg-gray-100/50 text-white">
            <div ref={stairingParentRef} className='w-full h-screen fixed top-0 left-0 z-[999]'>
                <div className='w-full h-full flex'>
                    <div className='w-full h-full flex '>
                        <div className='stairing w-1/5 h-full bg-black'></div>
                        <div className='stairing w-1/5 h-full bg-black'></div>
                        <div className='stairing w-1/5 h-full bg-black'></div>
                        <div className='stairing w-1/5 h-full bg-black'></div>
                        <div className='stairing w-1/5 h-full bg-black'></div>
                    </div>
                </div>
            </div>
<div ref={FullNavRef} className="opacity-0 w-full h-full flex flex-col bg-black items-center justify-center relative">
            <div onClick={() => setIsOpen(false)} className='flex items-center justify-between absolute top-0 right-5 z-50 hover:cursor-pointer'>
                <img src="/src/assets/icons/cross-thin.png" className='h-[30vh]' alt="" />
            </div>
            <div className='w-[13vw] p-4 absolute top-0 left-5 z-50 hover:cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 120 60">
                    <path fill="#ffffff" fill-rule="evenodd"
                        d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                </svg>
            </div>
            <div ref={FullNavLinkRef} className='link origin-top group overflow-hidden relative w-full flex items-center justify-center font-[font1] uppercase text-[8vw] leading-[5vw] pt-8 hover:cursor-pointer border-y border-gray-400'>

                <p>Work</p>
                <div className="mpvelink group-hover:top-0 transition-all duration-300 absolute overflow-hidden bg-[#d3fd50] text-black top-[-110%] pt-5 w-full">
                    <div className="flex moveX">

                        <div className="flex items-center gap-10 px-10">
                            <p className="whitespace-nowrap">SEE EVERYTHING</p>
                            <img className="h-[6vw] mb-2 rounded-full object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
                            <p className="whitespace-nowrap">SEE EVERYTHING</p>
                            <img className="h-[6vw] mb-2 rounded-full object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
                        </div>

                        <div className="flex items-center gap-10 px-10">
                            <p className="whitespace-nowrap">SEE EVERYTHING</p>
                            <img className="h-[6vw] mb-2 rounded-full object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
                            <p className="whitespace-nowrap">SEE EVERYTHING</p>
                            <img className="h-[6vw] mb-2 rounded-full object-cover" src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
                        </div>

                    </div>
                </div>
            </div>
            <div className='link origin-top group overflow-hidden relative w-full flex items-center justify-center font-[font1] uppercase text-[8vw] leading-[5vw] pt-10 hover:cursor-pointer border-t border-gray-400'>
                <p>Agency</p>
                <div className="mpvelink group-hover:top-0 transition-all duration-300 absolute overflow-hidden bg-[#d3fd50] text-black top-[-110%] pt-5 w-full">
                    <div className="flex moveX">

                        <div className="flex items-center gap-10 px-10">
                            <p className="whitespace-nowrap">known us</p>
                            <img className="h-[6vw] mb-2 rounded-full object-cover" src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" />
                            <p className="whitespace-nowrap">known us</p>
                            <img className="h-[6vw] mb-2 rounded-full object-cover" src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" />
                        </div>

                        <div className="flex items-center gap-10 px-10">
                            <p className="whitespace-nowrap">known us</p>
                            <img className="h-[6vw] mb-2 rounded-full object-cover" src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" />
                            <p className="whitespace-nowrap">known us</p>
                            <img className="h-[6vw] mb-2 rounded-full object-cover" src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" />
                        </div>

                    </div>
                </div>
            </div>
            <div className='link origin-top w-full flex items-center justify-center font-[font1] uppercase text-[8vw] leading-[5vw] pt-10 hover:cursor-pointer border-t border-gray-400'>
                <p>Contact</p>
            </div>
            <div className='link origin-top group overflow-hidden relative w-full flex items-center justify-center font-[font1] uppercase text-[8vw] leading-[5vw] pt-10 hover:cursor-pointer border-y border-gray-400'>
                <p>Blogs</p>
                <div className="mpvelink group-hover:top-0 transition-all duration-300 absolute overflow-hidden bg-[#d3fd50] text-black top-[-110%] pt-5 w-full">
                    <div className="flex moveX">

                        <div className="flex items-center gap-10 px-10">
                            <p className="whitespace-nowrap">read articles</p>
                            <img className="h-[6vw] mb-2 rounded-full object-cover" src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" />
                            <p className="whitespace-nowrap">read articles</p>
                            <img className="h-[6vw] mb-2 rounded-full object-cover" src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" />
                        </div>

                        <div className="flex items-center gap-10 px-10">
                            <p className="whitespace-nowrap">read articles</p>
                            <img className="h-[6vw] mb-2 rounded-full object-cover" src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" />
                            <p className="whitespace-nowrap">read articles</p>
                            <img className="h-[6vw] mb-2 rounded-full object-cover" src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" />
                        </div>

                    </div>
                </div>
            </div>
            <div className='absolute h-[10vh] px-5 w-full bottom-0 flex left-0 items-center justify-between'>
                <p className='text-lg'>MONTREAL_08:06:17</p>
                <div className='flex items-center justify-center gap-4 uppercase'>
                    <p className='text-xs uppercase font-thin'>Privacy Policy</p>
                    <p className='text-xs uppercase font-thin'>Privacy Notice</p>
                    <p className='text-xs uppercase font-thin'>Ethics Report</p>
                    <p className='text-xs uppercase font-thin'>Consent choise</p>

                </div>
                <div className='flex items-center justify-center gap-4 uppercase'>
                    <p className='border-2 border-white rounded-full  px-3 pt-3 leading-[1.6rem] text-4xl'>Fb</p>
                    <p className='border-2 border-white rounded-full  px-3 pt-3 leading-[1.6rem] text-4xl'>IG</p>
                    <p className='border-2 border-white rounded-full  px-3 pt-3 leading-[1.6rem] text-4xl'>In</p>
                </div>
            </div>
</div>

        </div>
    )
}
