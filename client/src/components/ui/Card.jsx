import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`border rounded-lg shadow-sm bg-white ${className}`}>
      {children}
    </div>
  );
};

export { Card };
