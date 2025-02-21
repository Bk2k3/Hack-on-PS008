import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChallengeCard = ({ challenge }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => navigate(`/challenges/${challenge._id}`)}
    >
      <h2 className="text-xl font-semibold">{challenge.title}</h2>
      <p className="text-gray-600">{challenge.description.substring(0, 100)}...</p>
      <div className="mt-2 text-sm">
        Difficulty: {challenge.difficulty} | Points: {challenge.points}
      </div>
    </div>
  );
};

export default ChallengeCard;
