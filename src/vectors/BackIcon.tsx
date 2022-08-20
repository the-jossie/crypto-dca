import React from 'react';

const BackIcon = ({ color = '#2EBB72' }) => {
  return (
    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 12.5L6 8.5L10 4.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { BackIcon };
