import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, icn, className = '' }) => {
  return (
    <button
      className={`flex items-center gap-2 justify-center rounded-full px-[3vw] p-3 text-black border border-black/25 font-semibold ${className}`}
    >
      {icn}
      {text}
    </button>
  );
};
export default Button;