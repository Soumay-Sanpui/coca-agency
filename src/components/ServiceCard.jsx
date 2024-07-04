import React from 'react'

const ServiceCard = ({icn, ttl, desc}) => {
  return (
    <div className='p-7 rounded-xl flex flex-col items-start justify-evenly gap-7 bg-[#212121] w-[33vw]'>
        <div>
            {icn}
        </div>
        <h3 className='text-[2vw]'>{ttl}</h3>
        <p className='font-thin text-sm text-gray-400'>{desc}</p>
    </div>
  )
}

export default ServiceCard