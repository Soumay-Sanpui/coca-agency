import React from 'react'
import FilledBtn from '../components/FilledBtn'
import DrwOpt from '../components/DrwOpt'

const FeatureSection = () => {
  const features = [
    {
        ttl: "Blog Headlines",
        desc: "Discover the Power of Headlines: Boost Your Blog's Readership and Reach"
    },
    {
        ttl: "Blog Intros",
        desc: "Discover the Power of Headlines: Boost Your Blog's Readership and Reach"
    },
    {
        ttl: "Content Rewriter",
        desc: "Discover the Power of Headlines: Boost Your Blog's Readership and Reach"
    },
    {
        ttl: "Facebook Ads",
        desc: "Discover the Power of Headlines: Boost Your Blog's Readership and Reach"
    },
    {
        ttl: "Product Description",
        desc: "Discover the Power of Headlines: Boost Your Blog's Readership and Reach"
    },
    {
        ttl: "PAS Copywriting Formula",
        desc: "Discover the Power of Headlines: Boost Your Blog's Readership and Reach"
    },
  ];
  return (
    <div className='w-screen p-10 flex my-[2vw]'>
        {/* left section */}
        <div className='w-1/2 flex flex-col gap-[3vw]'>
            <h2 className='font-semibold text-[4vw] leading-[4.5vw]'>Use coca to<br />build a website<br />that looks<br />beautiful.</h2>
            <p className='leading-[2.5vw]'>Elevate Your Website Design Game with Coco<br />Intuitive Features and Beautiful Templates</p>
            <div>
                <FilledBtn text={"See More"}/>
            </div>
        </div>
        {/* options section */}
        <div className='w-1/2'>
            {
                features.map((feature,index)=>(
                    <DrwOpt key={index} ttl={feature.ttl} desc={feature.desc}/>
                ))
            }
        </div>
    </div>
  )
}

export default FeatureSection