import React, { useEffect, useState } from 'react';
import ChallengeCard from '../components/challenges/ChallengeCard';

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/challenges`);
      const data = await res.json();
      setChallenges(data);
    };
    fetchChallenges();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Challenges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {challenges.map(challenge => (
          <ChallengeCard key={challenge._id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};

export default Challenges;
