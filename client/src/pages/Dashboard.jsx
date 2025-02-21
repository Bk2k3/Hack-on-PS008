import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Award, Code2, Github, BookOpen } from 'lucide-react';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user/profile`, { credentials: 'include' });
      const data = await res.json();
      setUserData(data);
    };
    fetchUserData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <img src={userData.avatar} alt={userData.username} className="w-16 h-16 rounded-full" />
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {userData.username}!</h1>
          <p className="text-gray-600">Level {userData.level} Coder</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard title="Current Level" value={userData.level} icon={<Award className="text-yellow-500" />} />
        <StatsCard title="Challenges Completed" value={userData.completedChallenges.length} icon={<Code2 className="text-green-500" />} />
        <StatsCard title="Current Streak" value={`${userData.currentStreak} days`} icon={<Github className="text-purple-500" />} />
        <StatsCard title="XP to Next Level" value={`${userData.experience}/1000`} icon={<BookOpen className="text-blue-500" />} />
      </div>
    </div>
  );
};

const StatsCard = ({ title, value, icon }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

export default Dashboard;
