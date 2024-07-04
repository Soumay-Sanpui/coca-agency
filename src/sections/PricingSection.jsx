import React from 'react'
import { useState } from 'react'
import PricingCard from '../components/PricingCard';

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const pricePacks = [
    {
      icn: <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" width="40" height="40" rx="20" fill="#F5F5F5"/>
      <path d="M12.818 14.318C11.0607 16.0754 11.0607 18.9246 12.818 20.682L20.5001 28.364L28.182 20.682C29.9393 18.9246 29.9393 16.0754 28.182 14.318C26.4246 12.5607 23.5754 12.5607 21.818 14.318L20.5001 15.6361L19.182 14.318C17.4246 12.5607 14.5754 12.5607 12.818 14.318Z" stroke="#1D1E25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ,
      tag: "Starter",
      desc: "Perfect to get started",
      price: `${isMonthly ? 5 : 20}`,
      isMnPr: isMonthly,
      incs: [
        "120 credits per month",
        "$0.4 per article",
        "All Types of content",
        "Online article editor",
        "Advanced export"
      ]
    },
    {
      icn: <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="40" height="40" rx="20" fill="white"/>
<path d="M21.5 18V11L12.5 22H19.5L19.5 29L28.5 18L21.5 18Z" stroke="#1D1E25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      ,
      tag: "Popular",
      desc: "Perfect to get Popular",
      price: `${isMonthly ? 40 : 100}`,
      isMnPr: isMonthly,
      incs: [
        "7000 credits per month",
        "Same day support",
        "All Types of content",
        "Online article editor",
        "Advanced export"
      ]
    },
    {
      icn: <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" width="40" height="40" rx="20" fill="#F5F5F5"/>
          <path d="M10.5 16L11.804 17.043C12.2583 17.4064 12.7864 17.6662 13.3514 17.8046C13.9164 17.9429 14.5048 17.9563 15.0756 17.8438C15.6463 17.7314 16.1857 17.4958 16.6561 17.1535C17.1264 16.8113 17.5165 16.3705 17.799 15.862L20.5 11L23.201 15.862C23.4836 16.3704 23.8737 16.8111 24.3441 17.1533C24.8145 17.4955 25.3539 17.7309 25.9247 17.8433C26.4954 17.9556 27.0838 17.9421 27.6488 17.8037C28.2138 17.6653 28.7418 17.4054 29.196 17.042L30.5 16L28.746 24.77C28.6694 25.1527 28.5065 25.5129 28.2696 25.8231C28.0327 26.1333 27.7281 26.3854 27.379 26.56C25.2432 27.628 22.888 28.184 20.5 28.184C18.112 28.184 15.7568 27.628 13.621 26.56C13.2719 26.3854 12.9673 26.1333 12.7304 25.8231C12.4935 25.5129 12.3306 25.1527 12.254 24.77L10.5 16Z" stroke="#1D1E25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.5 23C19.096 24.333 21.904 24.333 24.5 23" stroke="#1D1E25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>,
      tag: "Business",
      desc: "Perfect for Business",
      price: `${isMonthly ? 80 : 150}`,
      isMnPr: isMonthly,
      incs: [
        "600 credits per month",
        "$0.1 per article",
        "All types of content",
        "Online article editor",
        "Advanced export"
      ]
    }

  ]
  return (
    <div className='py-[9vw] min-h-screen'>
      {/* announcer section */}
      <div className='w-full flex flex-col items-center justify-center gap-[3vw]'>
        <h2 className='font-semibold text-[5vw]'>Get Started</h2>
        <p className='text-center'>By signing up now, you'll be able to gain access to our exclusive premium features,<br/>which are typically only available to paid users, without spending a single dime.</p>

        {/* switch */}
        <div className='flex flex-col items-center justify-around gap-[2vw]'>
          <div className='flex gap-[2vw] items-center'>
            <h5>Monthly</h5>
            <div className={`bg-btncl border border-btncl w-[7vw] h-[3vw] rounded-full flex items-center p-1 ${isMonthly ? 'justify-start bg-transparent': 'justify-end'}`} onClick={()=>setIsMonthly(!isMonthly)}>
              <span className='border border-black/25 w-[35%] h-full bg-white rounded-full' ></span>
            </div>
            <h5>Yearly</h5>
          </div>
          {/* discount */}
          <div>
            <div className='bg-btncl/30 w-max px-6 py-2 rounded-full'>
              <p>Save 75%</p>
            </div>
          </div>
        </div>
      </div>
      {/* pricing cards */}
      <div className='w-full flex items-center justify-center gap-[2vw] my-[3vw]'>
        {
          pricePacks.map((pack,index)=>(
            <PricingCard 
              key={index}
              icn={pack.icn} 
              tag={pack.tag}
              price={pack.price}
              desc={pack.desc}
              incs={pack.incs}
              isFilled={index == 1}
              isBest={index ==1}
              isMnPr={pack.isMnPr}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PricingSection;