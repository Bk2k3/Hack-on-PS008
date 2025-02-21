import React from 'react';

export const Button = ({ children, className = '', ...props }) => (
  <button className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ${className}`} {...props}>
    {children}
  </button>
);
