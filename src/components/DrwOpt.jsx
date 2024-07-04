import React, { useState } from 'react';

const DrwOpt = ({ ttl, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 p-4  mb-4">
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleDropdown}>
        {/* Left section (icon and heading) */}
        <div className="flex items-center justify-between space-x-6 w-full">
          <h2 className={`text-[1.5vw] font-semibold `}>{ttl}</h2>
          {
            isOpen? <img src='/minusicn.png'/> : <img src='/plusicn.png'/>
          }
        </div>
      </div>
      {/* Dropdown */}
      {isOpen && (
        <div className="mt-2">
          <p className="text-sm text-gray-600 mt-4">
            {desc}
          </p>
        </div>
      )}
    </div>
  );
};

export default DrwOpt;