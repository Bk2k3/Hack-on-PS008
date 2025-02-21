import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Trophy, ChevronRight } from 'lucide-react';

const ChallengeCard = ({ challenge, onClick }) => {
  const difficultyColor = {
    Beginner: 'text-green-500',
    Intermediate: 'text-yellow-500',
    Advanced: 'text-red-500'
  };

  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">{challenge.title}</CardTitle>
        <Trophy className={`w-5 h-5 ${difficultyColor[challenge.difficulty]}`} />
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4 line-clamp-2">{challenge.description}</p>
        <div className="flex items-center justify-between">
          <span className={`text-sm font-medium ${difficultyColor[challenge.difficulty]}`}>
            {challenge.difficulty}
          </span>
          <span className="text-sm text-gray-500">{challenge.points} XP</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ChallengeCard;
