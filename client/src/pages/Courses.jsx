import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Navbar from '@/components/layout/Navbar';
import { motion } from 'framer-motion';

const Courses = () => {
  const { data: courses, isLoading, error } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/courses`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      if (!res.ok) throw new Error('Failed to fetch courses');
      return res.json();
    }
  });

  if (isLoading) return <div className="p-6 text-center text-lg font-semibold text-white">⏳ Loading courses...</div>;
  if (error) return <div className="p-6 text-center text-red-400">⚠️ Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <Navbar />
      <div className="p-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-extrabold mb-2">📚 Available Courses</h1>
          <p className="text-lg text-gray-300">Level up by completing courses and earning XP! 🚀</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <motion.div 
              key={course.id} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="relative overflow-hidden bg-white bg-opacity-20 backdrop-blur-md text-gray-900 shadow-lg rounded-lg hover:shadow-xl transition-shadow transform duration-300">
                <CardHeader className="relative p-4">
                  <CardTitle className="text-lg font-bold text-white">{course.title}</CardTitle>
                  <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    🏆 {course.xp} XP
                  </span>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-300">{course.description}</p>
                  <button className="mt-4 w-full bg-yellow-400 text-gray-900 font-bold py-2 rounded-lg hover:bg-yellow-500 transition shadow-md">
                    Continue Learning 🚀
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;