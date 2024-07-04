import React from 'react'

const ServiceCard = ({icn, ttl, desc}) => {
  return (
    <div className='p-7 rounded-lg flex flex-col items-start justify-evenly gap-7 border border-white w-[33vw]'>
        <div>
            {icn}
        </div>
        <h3 className='font-semibold text-[2vw]'>{ttl}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default ServiceCard