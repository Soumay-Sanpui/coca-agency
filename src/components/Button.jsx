import React from 'react'

const Button = ({text, icn}) => {
  return (
    <button className='flex items-center gap-2 justify-center rounded-full px-[3vw] p-3 text-btncl border border-black/25 font-semibold'>
      {icn}
      {text}
      </button>
  )
}

export default Button