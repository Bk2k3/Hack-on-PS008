// pages/Dashboard.jsx
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Code2, Github, BookOpen } from 'lucide-react';

const Dashboard = () => {
  const { data: userData, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/profile`, {
        credentials: 'include',
      });
      if (!response.ok) throw new Error('Failed to fetch user data');
      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <img
          src={userData?.avatar || '/default-avatar.png'}
          alt={userData?.username}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {userData?.username}!</h1>
          <p className="text-gray-600">Level {userData?.level} Coder</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Level"
          value={userData?.level}
          icon={<Trophy className="text-yellow-500" />}
        />
        <StatsCard
          title="Challenges Completed"
          value={userData?.completedChallenges?.length || 0}
          icon={<Code2 className="text-green-500" />}
        />
        <StatsCard
          title="Current Streak"
          value={`${userData?.currentStreak || 0} days`}
          icon={<Github className="text-purple-500" />}
        />
        <StatsCard
          title="XP to Next Level"
          value={`${userData?.experience || 0}/1000`}
          icon={<BookOpen className="text-blue-500" />}
        />
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
