import React from 'react'
import Button from './Button'

const CTA = () => {
  return (
    <div className='bg-btncl text-white flex flex-col text-center gap-[2vw] rounded-2xl p-[2vw] py-[5vw]'>
        <h1 className='text-[3vw] font-bold'>By improving your writing, you<br />can bring your ideas to life<br />more effectively.</h1>
        <div className='flex flex-col items-center justify-center gap-[2vw]'>
            <p>Discover the Magic of Writing: Empower Your Ideas and Expressions for Maximum Impact</p>
            <Button text={"Start 10-Day Free Trial"} className='bg-white' />
        </div>
    </div>
  )
}

export default CTA