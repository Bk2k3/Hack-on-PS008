import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChallengeCard, ChallengeDetail } from '@/components/challenges';
import { fetchChallenges } from '@/api/challenges';
import Navbar from '@/components/layout/Navbar';
import { motion } from 'framer-motion';

const Challenges = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const { data: challenges, isLoading, error } = useQuery({
    queryKey: ['challenges'],
    queryFn: fetchChallenges
  });

  const handleSubmit = async (code) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/challenges/${selectedChallenge._id}/submit`,
        {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({ code }),
          credentials: 'include'
        }
      );
      return response.json();
    } catch (error) {
      console.error('Error submitting challenge:', error);
      throw error;
    }
  };

  if (isLoading) return <div className="p-6 text-center text-lg font-semibold">⏳ Loading challenges...</div>;
  if (error) return <div className="p-6 text-center text-red-600">⚠️ Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-700 to-blue-800 text-white">
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        {selectedChallenge ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4 }}
          >
            <button 
              onClick={() => setSelectedChallenge(null)} 
              className="mb-4 text-white font-semibold hover:underline flex items-center gap-1"
            >
              ← Back to Challenges
            </button>
            <ChallengeDetail challenge={selectedChallenge} onSubmit={handleSubmit} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold mb-6 text-center">🚀 Coding Challenges</h1>
            <p className="text-center text-gray-200 mb-8">
              Level up by solving challenges and earning XP! 💡
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges?.map(challenge => (
                <motion.div 
                  key={challenge._id} 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChallengeCard 
                    challenge={challenge} 
                    onClick={() => setSelectedChallenge(challenge)} 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Challenges;