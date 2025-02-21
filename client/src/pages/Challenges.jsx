// pages/Challenges.jsx
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChallengeCard, ChallengeDetail } from '../components/challenges';

const Challenges = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const { data: challenges, isLoading } = useQuery({
    queryKey: ['challenges'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/challenges`);
      if (!response.ok) throw new Error('Failed to fetch challenges');
      return response.json();
    },
  });

  const handleSubmit = async (code) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/challenges/${selectedChallenge._id}/submit`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }),
          credentials: 'include',
        }
      );
      return response.json();
    } catch (error) {
      console.error('Error submitting challenge:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {selectedChallenge ? (
        <div>
          <button
            onClick={() => setSelectedChallenge(null)}
            className="mb-4 text-blue-600 hover:underline flex items-center gap-1"
          >
            ← Back to challenges
          </button>
          <ChallengeDetail
            challenge={selectedChallenge}
            onSubmit={handleSubmit}
          />
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-6">Coding Challenges</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {challenges?.map((challenge) => (
              <ChallengeCard
                key={challenge._id}
                challenge={challenge}
                onClick={() => setSelectedChallenge(challenge)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenges;