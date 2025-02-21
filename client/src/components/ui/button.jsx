import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, className = '', variant = 'primary', ...props }) => {
  let bgColor, hoverColor, glowEffect;

  switch (variant) {
    case 'success':
      bgColor = 'bg-green-500';
      hoverColor = 'hover:bg-green-600';
      glowEffect = 'shadow-[0_0_10px_#34D399]';
      break;
    case 'danger':
      bgColor = 'bg-red-500';
      hoverColor = 'hover:bg-red-600';
      glowEffect = 'shadow-[0_0_10px_#F87171]';
      break;
    case 'secondary':
      bgColor = 'bg-gray-500';
      hoverColor = 'hover:bg-gray-500';
      glowEffect = 'shadow-[0_0_10px_#9CA3AF]';
      break;
    default:
      bgColor = 'bg-blue-600';
      hoverColor = 'hover:bg-blue-700';
      glowEffect = 'shadow-[0_0_10px_#3B82F6]';
      break;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-5 py-2.5 text-white font-bold rounded-lg transition-all ${bgColor} ${hoverColor} ${glowEffect} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};