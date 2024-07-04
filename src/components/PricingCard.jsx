import React from 'react';
import Button from '../components/Button';

const PricingCard = ({ icn, tag, desc, price, incs, isFilled, isMnPr, isBest }) => {
  return (
    <div className={`p-[3vw] w-[27vw] border border-black/20 rounded-lg ${isFilled ? 'bg-btncl text-white' : ''} shadow-lg`}>
      {/* announcer (icon pack-name description) */}
      <div className='flex flex-col items-start justify-center'>
        <div className='w-full flex items-center justify-between'>
            {icn}
            {
                isBest && (
                    <div className='bg-white text-black p-[0.5vw] rounded-full px-[1.4vw]'>
                       <p>Best Offer 🔥</p> 
                    </div>
                )
            }
        </div>
        <h4 className='leading-[4vw] text-[3vw] mt-[2vw]'>{tag}</h4>
        <p>{desc}</p>
      </div>
      {/* price */}
      <div className='flex items-baseline justify-start my-[1vw]'>
        <h3 className='text-[4vw]'>${price}</h3>
        <p>{isMnPr ? '/month' : '/year'}</p>
      </div>
      {/* pack includes */}
      <div className='flex flex-col items-start justify-center gap-3'>
        <p>{tag} included:</p>
        <div>
          {incs.map((inc, index) => (
            <div key={index} className={`text-sm text-[1vw] flex items-center justify-start gap-4`}>
              <svg className={`${isFilled ? 'invert' : ''}`} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 21.6C17.802 21.6 22.1 17.302 22.1 12C22.1 6.69809 17.802 2.40002 12.5 2.40002C7.19809 2.40002 2.90002 6.69809 2.90002 12C2.90002 17.302 7.19809 21.6 12.5 21.6ZM16.9486 10.4486C17.4172 9.97992 17.4172 9.22013 16.9486 8.7515C16.4799 8.28287 15.7201 8.28287 15.2515 8.7515L11.3 12.703L9.74855 11.1515C9.27992 10.6829 8.52013 10.6829 8.0515 11.1515C7.58287 11.6201 7.58287 12.3799 8.0515 12.8486L10.4515 15.2486C10.9201 15.7172 11.6799 15.7172 12.1486 15.2486L16.9486 10.4486Z" fill="#1D1E25"/>
              </svg>
              <p>{inc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* cta button */}
      <div className={`${isFilled ? 'text-white' : ''} my-[2vw] w-full flex items-center justify-center`}>
        <Button className={`${isFilled ? 'bg-white' : 'border border-black/25'}`} text={"Get Free Trial"} />
      </div>
    </div>
  );
};

export default PricingCard;
