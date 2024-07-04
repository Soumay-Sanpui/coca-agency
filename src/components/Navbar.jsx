import React from 'react'
import Button from './Button';

const Navbar = () => {
  const navLinks = ["Home", "About", "Blog", "Pricing", "Contact Us"];
  return (
    <nav className='w-screen flex items-center justify-around py-[1.5vw]'>
        {/* logo section */}
        <div>
            <img src='/logo.png'/>
        </div>
        {/* links & CTA sections */}
            <div className='flex gap-[2vw]'>
                {
                    navLinks.map((link,index)=>(
                        <a className='hover:text-blue-500' href='/' key={index}>{link}</a>
                    ))
                }
            </div>
            <Button text={"Start For Free"}/>
    </nav>
  )
}

export default Navbar