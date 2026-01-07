import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'
// import React from 'react'
export const Stairs = (props) => {
    console.log(props.children);
    const location = useLocation();
    const stairParentRef = React.useRef(null)
    const PageRef = React.useRef(null)
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: 'block',

        })
        tl.from('.stair', {
            // display: 'block',
            height: 0,
            stagger: {

                amount: -0.25
            },

        })
        tl.to('.stair', {

            y: '100%',
            stagger: {

                amount: -0.25
            },

        })
        tl.to(stairParentRef.current, {
            display: 'none',

        })
        tl.to('.stair', {
            y: '0%',
        })
        gsap.from(PageRef.current, { 
            opacity: 0, 
            delay: 1,
            scale : 2,
            duration: 1 
        })
    }, [location.pathname])
    return (
        <div>
        <div ref={stairParentRef} className='w-full h-screen fixed top-0 left-0 z-20'>
            <div className='w-full h-full flex '>
                <div className='stair w-1/5 h-full bg-black'></div>
                <div className='stair w-1/5 h-full bg-black'></div>
                <div className='stair w-1/5 h-full bg-black'></div>
                <div className='stair w-1/5 h-full bg-black'></div>
                <div className='stair w-1/5 h-full bg-black'></div>
            </div>
        </div>
        <div ref={PageRef}>
        {props.children}
        </div>
        </div>
    )
}
