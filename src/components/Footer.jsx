import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white bg-[url("/ftrimg.png")] px-[5vw] py-[2vw] w-screen h-screen bg-no-repeat bg-cover'>
        <div className='w-full h-full py-[1vw] pt-[3vw] flex flex-col gap-[5vw]'>
            <div>
                <img className='invert' src='/logo.png'/>
            </div>
            <h3 className='text-[3vw]'>Gain valuable insights into your<br />users' preferences</h3>
            <div className='flex gap-[12vw]'>
                <div className='flex gap-3 items-center justify-center'>
                    <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="23" cy="23.5" r="23" fill="#FFC24D"/>
<g clip-path="url(#clip0_1_1409)">
<path d="M32 21.5C32 28.5 23 34.5 23 34.5C23 34.5 14 28.5 14 21.5C14 19.1131 14.9482 16.8239 16.636 15.136C18.3239 13.4482 20.6131 12.5 23 12.5C25.3869 12.5 27.6761 13.4482 29.364 15.136C31.0518 16.8239 32 19.1131 32 21.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 24.5C24.6569 24.5 26 23.1569 26 21.5C26 19.8431 24.6569 18.5 23 18.5C21.3431 18.5 20 19.8431 20 21.5C20 23.1569 21.3431 24.5 23 24.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_1409">
<rect width="24" height="24" fill="white" transform="translate(11 11.5)"/>
</clipPath>
</defs>
                    </svg>
                    <p>1929, Bancangan, Sambit,<br/>Wakanda Kidul</p>
                </div>

                <div className='flex gap-3 items-center justify-center'>
                    <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="23" cy="23.5" r="23" fill="#66D6EF"/>
                    <path d="M18 20.5L22.38 23.99C22.5565 24.1295 22.775 24.2054 23 24.2054C23.225 24.2054 23.4435 24.1295 23.62 23.99L28 20.5M31 30.5H15C14.7348 30.5 14.4804 30.3946 14.2929 30.2071C14.1054 30.0196 14 29.7652 14 29.5V17.5C14 17.2348 14.1054 16.9804 14.2929 16.7929C14.4804 16.6054 14.7348 16.5 15 16.5H31C31.2652 16.5 31.5196 16.6054 31.7071 16.7929C31.8946 16.9804 32 17.2348 32 17.5V29.5C32 29.7652 31.8946 30.0196 31.7071 30.2071C31.5196 30.3946 31.2652 30.5 31 30.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>hello@yourdomain.com</p>
                </div>
            </div>
            <div className='flex items-center justify-between p-7 border-t-2 border-gray-600 text-gray-500 text-sm'>
                <p>&copy; coca, All rights reserved</p>
                <div className='flex items-center justify-center gap-[1.5vw]'>
                    <p className='hover:text-white text-gray-200 hover:cursor-pointer'>Terms & Conditions</p>
                    <p className='hover:text-white text-gray-200 hover:cursor-pointer'>Privacy Policy</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer