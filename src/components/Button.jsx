import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, icn, className = '' }) => {
  return (
    <button
      className={`shadow-sm flex items-center gap-2 justify-center rounded-full px-[3vw] p-3 text-black ${className}`}
    >
      {icn}
      {text}
    </button>
  );
};
export default Button;