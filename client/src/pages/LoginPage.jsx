import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      localStorage.setItem('token', token);
      setUser({ token });
      navigate('/dashboard');
    }
  }, [navigate, setUser]);

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-blue-800">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full text-center"
      >
        {/* Gamified Welcome Section */}
        <motion.h2 
          className="text-4xl font-extrabold text-gray-900 mb-3"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          🚀 Welcome to CodeQuest!
        </motion.h2>
        <p className="text-md text-gray-600">Start your coding journey today and level up your skills!</p>

        {/* Sign-in Button */}
        <motion.button 
          onClick={handleGoogleLogin}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full py-3 px-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
        >
          🔥 Sign in with Google
        </motion.button>

        {/* Fun Footer Text */}
        <p className="mt-4 text-gray-500 text-sm">Join thousands of coders and climb the leaderboard! 🏆</p>
      </motion.div>
    </div>
  );
};

export default LoginPage;