import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="bg-white bg-opacity-20 backdrop-blur-md shadow-md p-4 flex justify-between items-center rounded-b-lg border-b border-gray-500">
      <div className="flex items-center space-x-6">
        <Link to="/dashboard" className="text-2xl font-extrabold text-yellow-400 tracking-wide">
          🚀 CodeQuest
        </Link>
        <Link to="/challenges" className="text-white hover:text-yellow-400 transition">Challenges</Link>
        <Link to="/courses" className="text-white hover:text-yellow-400 transition">Courses</Link>
      </div>
      <button 
        onClick={logout} 
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow-md"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;