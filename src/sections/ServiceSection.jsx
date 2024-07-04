import React from 'react'
import ServiceCard from '../components/ServiceCard'

const ServiceSection = () => {
  const services = [
    {
        icn:
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66669 8.33335C6.66669 7.41288 7.41288 6.66669 8.33335 6.66669H31.6667C32.5872 6.66669 33.3334 7.41288 33.3334 8.33335V11.6667C33.3334 12.5872 32.5872 13.3334 31.6667 13.3334H8.33335C7.41288 13.3334 6.66669 12.5872 6.66669 11.6667V8.33335Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66669 21.6667C6.66669 20.7462 7.41288 20 8.33335 20H18.3334C19.2538 20 20 20.7462 20 21.6667V31.6667C20 32.5872 19.2538 33.3334 18.3334 33.3334H8.33335C7.41288 33.3334 6.66669 32.5872 6.66669 31.6667V21.6667Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.6667 21.6667C26.6667 20.7462 27.4129 20 28.3334 20H31.6667C32.5872 20 33.3334 20.7462 33.3334 21.6667V31.6667C33.3334 32.5872 32.5872 33.3334 31.6667 33.3334H28.3334C27.4129 33.3334 26.6667 32.5872 26.6667 31.6667V21.6667Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
        ttl: "Landing Page Analyzer",
        desc: "This tool helps evaluate and improve the effectiveness of landing pages by providing a score based on factors such as page structure, visual elements, and layout."
    },
    {
        icn:<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5747 4.5835C13.158 4.5835 12.1663 4.71683 10.7413 5.2835C9.26567 5.87366 7.95503 6.8127 6.92169 8.02021C5.88834 9.22772 5.16307 10.6677 4.808 12.2168C4.658 12.8252 4.633 13.7918 4.59966 19.3668C4.54966 26.3502 4.59966 27.3835 5.04133 28.7668C5.3404 29.798 5.83868 30.7606 6.508 31.6002C7.90277 33.4753 9.9367 34.7739 12.2247 35.2502C13.2413 35.4335 25.7997 35.4835 27.0913 35.3085C29.2495 35.0389 31.2438 34.0181 32.7247 32.4252C33.8962 31.2392 34.7329 29.7643 35.1497 28.1502C35.3497 27.4252 35.3663 27.0668 35.408 22.8085C35.4737 21.1083 35.4459 19.4057 35.3247 17.7085C35.2771 17.4514 35.1789 17.2063 35.0359 16.9874C34.8928 16.7686 34.7077 16.5803 34.4913 16.4335C33.927 16.3131 33.3517 16.2517 32.7747 16.2502C31.3913 16.1835 31.233 16.1585 30.7997 15.9085C30.108 15.5002 29.9163 15.0752 29.9163 13.8752C29.8851 12.6901 29.6177 11.5232 29.1297 10.4429C28.6418 9.3625 27.9431 8.39039 27.0747 7.5835C25.8303 6.28671 24.2758 5.32873 22.558 4.80016C22.158 4.67516 21.2497 4.6335 18.208 4.60016H16.5413L16.5747 4.5835ZM17.1997 12.7668C20.2247 12.7668 20.3247 12.7668 20.7663 13.0002C21.0544 13.1246 21.2962 13.3363 21.4576 13.6054C21.6191 13.8745 21.6921 14.1874 21.6663 14.5002C21.675 14.8009 21.6021 15.0983 21.4554 15.3609C21.3086 15.6235 21.0936 15.8415 20.833 15.9918C20.5247 16.1835 20.333 16.2002 17.3747 16.2168C16.2073 16.2486 15.0392 16.2207 13.8747 16.1335C13.6077 16.0355 13.3684 15.8743 13.1775 15.6635C12.9865 15.4528 12.8495 15.1989 12.7782 14.9235C12.7069 14.6482 12.7035 14.3597 12.7682 14.0828C12.8329 13.8058 12.9638 13.5487 13.1497 13.3335C13.6913 12.7918 13.8413 12.7752 17.1997 12.7752V12.7668ZM19.9997 23.8418C26.1663 23.8418 26.133 23.8418 26.7247 24.3752C26.9227 24.5557 27.0743 24.7813 27.1666 25.0329C27.2589 25.2845 27.2891 25.5547 27.2548 25.8204C27.2204 26.0862 27.1225 26.3398 26.9693 26.5597C26.8161 26.7795 26.6121 26.9592 26.3747 27.0835L25.3497 27.2502L19.9997 27.3168C15.3163 27.3668 13.983 27.3168 13.7413 27.1752C13.4786 27.0457 13.2494 26.8572 13.0716 26.6244C12.8938 26.3917 12.7722 26.121 12.7163 25.8335C12.6919 25.5514 12.7292 25.2674 12.8256 25.0011C12.922 24.7349 13.0752 24.4929 13.2747 24.2918C13.7663 23.8502 13.9747 23.8335 19.9413 23.8335L19.9997 23.8418Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
        ttl:"Blog Title Generator",
        desc:"By entering specific keywords or topics, this tool can assist in finding blog titles that are not only attractive but also effective in capturing the attention of the intended audience."
    },
    {
        icn: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3333 16.6667H13.35M20 16.6667H20.0167M26.6667 16.6667H26.6833M15 26.6667H8.33333C6.49238 26.6667 5 25.1743 5 23.3333V9.99999C5 8.15904 6.49238 6.66666 8.33333 6.66666H31.6667C33.5076 6.66666 35 8.15904 35 9.99999V23.3333C35 25.1743 33.5076 26.6667 31.6667 26.6667H23.3333L15 35V26.6667Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
        ttl: "Email Subject Line Analyzer",
        desc: "This tool helps evaluate and improve the effectiveness of email subjects by providing a score based on factors such as length, engagement, and appeal."
    },
    {
        icn: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3333 21.6667V20M20 21.6667V16.6667M26.6667 21.6667V13.3333M13.3333 35L20 28.3333L26.6667 35M5 6.66666H35M6.66667 6.66666H33.3333V26.6667C33.3333 27.5871 32.5871 28.3333 31.6667 28.3333H8.33333C7.41286 28.3333 6.66667 27.5871 6.66667 26.6667V6.66666Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
        ttl: "Emotional Marketing Value",
        desc: "This tool helps determine the emotional strength of a copy by providing an EMV score based on the emotional categories used in the copy."
    }
  ]
  return (
    <div className='w-screen bg-[url("/frimg.png")] bg-cover bg-no-repeat text-white py-[10vw] px-[6vw]'>
        {/* announcer */}
        <div className='flex flex-col gap-[2vw]'>
            <h2 className='text-[4vw] font-semibold'>Take Your Copywriting to<br />the Next Level with These<br/>Innovative Features</h2>
            <p>Upgrade your copywriting with powerful tools that analyze, generate, and optimize headlines, emotional impact,<br />persuasion, and more, ensuring your message stands out and resonates with your target audience."</p>
        </div>
        {/* card section */}
        <div className='flex flex-wrap w-[80%] gap-[3vw] mt-[7vw]'>
            {
                services.map((service,index)=>(
                    <ServiceCard icn={service.icn} ttl={service.ttl} desc={service.desc} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default ServiceSection