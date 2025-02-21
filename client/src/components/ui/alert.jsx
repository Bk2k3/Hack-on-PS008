import React from 'react';
import { motion } from 'framer-motion';

export const Alert = ({ children, variant = 'default', className = '', ...props }) => {
  let bgColor, textColor, borderColor, glowEffect;

  switch (variant) {
    case 'success':
      bgColor = 'bg-green-500 bg-opacity-20 backdrop-blur-md';
      textColor = 'text-green-300';
      borderColor = 'border-green-400';
      glowEffect = 'shadow-[0_0_10px_#34D399]';
      break;
    case 'destructive':
      bgColor = 'bg-red-500 bg-opacity-20 backdrop-blur-md';
      textColor = 'text-red-300';
      borderColor = 'border-red-400';
      glowEffect = 'shadow-[0_0_10px_#F87171]';
      break;
    default:
      bgColor = 'bg-gray-700 bg-opacity-20 backdrop-blur-md';
      textColor = 'text-gray-300';
      borderColor = 'border-gray-500';
      glowEffect = '';
      break;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`border ${borderColor} p-4 rounded-lg ${bgColor} ${textColor} ${glowEffect} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const AlertTitle = ({ children, className = '' }) => (
  <h4 className={`font-bold text-lg ${className}`}>{children}</h4>
);

export const AlertDescription = ({ children, className = '' }) => (
  <p className={`text-sm text-gray-200 ${className}`}>{children}</p>
);