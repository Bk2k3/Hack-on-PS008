import React from 'react';

export const Card = ({ children, className = '', ...props }) => (
  <div 
    className={`bg-white bg-opacity-5 backdrop-blur-md border border-gray-500 rounded-lg shadow-lg transition-all hover:shadow-xl ${className}`} 
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-4 border-b border-gray-500 ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-4 text-white ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h2 className={`text-xl font-bold text-white ${className}`} {...props}>
    {children}
  </h2>
);