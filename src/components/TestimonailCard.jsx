import React from 'react'

const TestimonailCard = () => {
  return (
    <div className='flex flex-col gap-[5vw] w-[70%]'>
        {/* heading & descrption*/}
        <div className='flex gap-[1.5vw]'>
            <div>
                <svg width="51" height="41" viewBox="0 0 51 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M42 11.2169C37.0573 13.5597 34.586 16.3123 34.586 19.4751C36.6928 19.7093 38.4348 20.539 39.8123 21.9642C41.1897 23.3894 41.8785 25.039 41.8785 26.9132C41.8785 28.9046 41.21 30.5835 39.873 31.9501C38.5361 33.3167 36.8548 34 34.8291 34C32.5604 34 30.5955 33.1117 28.9344 31.3351C27.2734 29.5586 26.4429 27.4013 26.4429 24.8633C26.4429 17.2494 30.8588 11.295 39.6907 7L42 11.2169ZM24.5571 11.2169C19.574 13.5597 17.0824 16.3123 17.0824 19.4751C19.2296 19.7093 20.992 20.539 22.3694 21.9642C23.7469 23.3894 24.4356 25.039 24.4356 26.9132C24.4356 28.9046 23.757 30.5835 22.3998 31.9501C21.0426 33.3167 19.3512 34 17.3255 34C15.0567 34 13.102 33.1117 11.4612 31.3351C9.82039 29.5586 9 27.4013 9 24.8633C9 17.2494 13.3957 11.295 22.1871 7L24.5571 11.2169Z" fill="#1D1E25"/>
                </svg>
            </div>
            <div className='flex flex-col gap-6'>
                <h5 className='font-bold text-[2vw]'>The service is worth the price and I<br /> really enjoyed it.</h5>
                <p>Thanks to the copywriting services provided by this website, our online sales<br />have increased significantly. The team truly understands our brand voice<br />and delivers content that resonates with our target audience</p>
            </div>
        </div>
        {/* icn & next */}
        <div className='flex items-center justify-between px-[5vw]'>
            <div className='flex gap-[1vw]'>
                <div className='w-10 h-10 bg-gray-300 rounded-full'>
                </div>
                <div>
                    <p className='font-semibold'>John Albert</p>
                    <p className='text-sm'>E-commerce business owner</p>
                </div>
            </div>
            <div>
                <svg width="96" height="40" viewBox="0 0 96 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3333 29.3333L4 20M4 20L13.3333 10.6666M4 20L28 20" stroke="#7E8492" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M79.3333 8.33337L91 20M91 20L79.3333 31.6667M91 20L61 20" stroke="#0258F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default TestimonailCard