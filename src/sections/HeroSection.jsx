import React from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import FilledBtn from '../components/FilledBtn'

const HeroSection = () => {
  return (
    <div className='bg-[url("/herobg.png")] bg-cover bg-no-repeat'>
    <Navbar />
    <div className=' py-[6vw] w-screen px-[8vw] min-h-screen flex flex-col gap-[4vw] items-start justify-around'>
      {/* announcer section */}
      <div className='flex flex-col gap-[4vw]'>
        <h1 className='text-[8vw] leading-[9vw]'>VISION INTO <br /> REALITY</h1>
        <p className='text-sm font-light'>Proven Strategies for High-Converting Website Copy: Techniques to<br />Optimize Your Copy for Maximum Conversions and Sales</p>
        {/* buttons */}
        <div className='flex gap-3 items-center'>
          <FilledBtn text="Try The Playground"/>
          <Button text={"Watch a Demo"} 
            className='border border-black/25'
            icn={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="#4A36DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4A36DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          }
          />
        </div>
      </div>
      {/* trust section */}
      <div className='flex flex-col gap-10'>
        <p className='text-xl font-semibold'>Trusted by nearly 50+<br />paying customers</p>
        <div>
          <img src='/cmplg.png'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeroSection