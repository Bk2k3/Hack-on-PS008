import React from 'react';

export const Alert = ({ children, variant = 'default', className = '', ...props }) => {
  let bgColor, textColor;
  switch (variant) {
    case 'success':
      bgColor = 'bg-green-100';
      textColor = 'text-green-800';
      break;
    case 'destructive':
      bgColor = 'bg-red-100';
      textColor = 'text-red-800';
      break;
    default:
      bgColor = 'bg-gray-100';
      textColor = 'text-gray-800';
      break;
  }
  return (
    <div className={`${bgColor} ${textColor} p-4 rounded ${className}`} {...props}>
      {children}
    </div>
  );
};

export const AlertTitle = ({ children, className = '' }) => (
  <h4 className={`font-bold ${className}`}>{children}</h4>
);

export const AlertDescription = ({ children, className = '' }) => (
  <p className={`text-sm ${className}`}>{children}</p>
);
