import React from 'react';
import { Book, Code, Trophy, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Navbar from '@/components/layout/Navbar';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const xpPercentage = 30; // Dynamic XP Progress (You can replace it with real data)

  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-800 min-h-screen text-white">
      <Navbar />
      <div className="p-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-extrabold mb-2">🚀 Welcome to CodeQuest!</h1>
          <p className="text-lg text-gray-300">Your journey to mastering programming begins here.</p>
        </motion.div>

        {/* Gamified Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="bg-gradient-to-r from-yellow-500 to-orange-400 shadow-xl">
              <CardHeader className="flex justify-between items-center pb-2">
                <CardTitle className="text-sm font-bold">Current Level</CardTitle>
                <Trophy className="h-5 w-5 text-white" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2</div>
                <div className="text-xs text-gray-100">300 / 1000 XP</div>
                {/* Enhanced XP Progress Bar */}
                <div className="relative w-full h-3 bg-gray-700 rounded-full mt-2 shadow-inner">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-md"
                    style={{ width: `${xpPercentage}%` }}
                    animate={{ width: `${xpPercentage}%` }}
                    transition={{ duration: 1 }}
                  />
                  <span className="absolute inset-0 flex justify-center items-center text-xs font-bold text-white">
                    {xpPercentage}% XP
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="bg-gradient-to-r from-green-500 to-teal-400 shadow-xl">
              <CardHeader className="flex justify-between items-center pb-2">
                <CardTitle className="text-sm font-bold">Challenges Completed</CardTitle>
                <Code className="h-5 w-5 text-white" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">4</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="bg-gradient-to-r from-purple-500 to-pink-400 shadow-xl">
              <CardHeader className="flex justify-between items-center pb-2">
                <CardTitle className="text-sm font-bold">Learning Streak</CardTitle>
                <Brain className="h-5 w-5 text-white" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">🔥 14 days</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="bg-gradient-to-r from-blue-500 to-cyan-400 shadow-xl">
              <CardHeader className="flex justify-between items-center pb-2">
                <CardTitle className="text-sm font-bold">Courses Unlocked</CardTitle>
                <Book className="h-5 w-5 text-white" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">📖 5 / 12</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Enhanced Leaderboard Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="mt-12 bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-700"
        >
          <h2 className="text-xl font-bold text-center">🏆 Leaderboard</h2>
          <div className="mt-4 flex flex-col space-y-2">
            <motion.div whileHover={{ scale: 1.02 }} className="flex justify-between bg-gray-800 p-3 rounded-md shadow-md">
              <span className="text-yellow-400 font-bold">1. Alice</span> 
              <span className="text-white font-semibold">1500 XP</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="flex justify-between bg-gray-800 p-3 rounded-md shadow-md">
              <span className="text-gray-300 font-bold">2. Bob</span> 
              <span className="text-white font-semibold">1200 XP</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="flex justify-between bg-gray-800 p-3 rounded-md shadow-md">
              <span className="text-blue-400 font-bold">3. You</span> 
              <span className="text-white font-semibold">{xpPercentage * 10} XP</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;