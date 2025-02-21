import React from 'react';
import { Book, Code, Trophy, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Navbar from '@/components/layout/Navbar';
import { motion } from 'framer-motion';

const Dashboard = () => {
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
                <div className="text-3xl font-bold">1</div>
                <div className="text-xs text-gray-100">0 / 1000 XP</div>
                <div className="w-full h-3 bg-gray-300 rounded-full mt-2">
                  <motion.div 
                    className="h-full bg-white rounded-full" 
                    style={{ width: `0%` }}
                    animate={{ width: '10%' }}
                    transition={{ duration: 1 }}
                  />
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
                <div className="text-3xl font-bold">0</div>
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
                <div className="text-3xl font-bold">🔥 7 days</div>
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
                <div className="text-3xl font-bold">📖 3 / 12</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Leaderboard Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="mt-12 bg-gray-900 p-6 rounded-xl shadow-xl"
        >
          <h2 className="text-xl font-bold text-center">🏆 Leaderboard</h2>
          <div className="mt-4 flex flex-col space-y-2">
            <div className="flex justify-between bg-gray-800 p-2 rounded-md">
              <span>1. Alice</span> <span>1500 XP</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-2 rounded-md">
              <span>2. Bob</span> <span>1200 XP</span>
            </div>
            <div className="flex justify-between bg-gray-800 p-2 rounded-md">
              <span>3. You</span> <span>0 XP</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;