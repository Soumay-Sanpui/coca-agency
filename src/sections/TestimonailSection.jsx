import React from 'react'
import TestimonailCard from '../components/TestimonailCard'
import CTA from '../components/CTA'

const TestimonailSection = () => {
  return (
    <div className='w-full px-20 flex flex-col items-between justify-center gap-[5vw] py-[7vw]'>
        {/* announcer */}
        <div className='flex items-center justify-between'>
            <h2 className='font-semibold text-[4vw] leading-tight'>Our Clients Knows<br /> the value we provide</h2>
            <p>We take great pride in the satisfaction of<br />our clients, as evidenced by their glowing<br />feedback about our exceptional service.</p>
        </div>
        {/* testimonials - CTA*/}
        
        <div className='w-full flex flex-col gap-[13vw] items-center justify-center mb-[3vw]'>
            <TestimonailCard />
        </div>
        <CTA />
    </div>
  )
}

export default TestimonailSection