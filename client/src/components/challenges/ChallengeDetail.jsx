import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CodeEditor from '../editor/CodeEditor';

const ChallengeDetail = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchChallenge = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/challenges/${id}`);
      const data = await res.json();
      setChallenge(data);
      setCode(data.starterCode || '');
    };
    fetchChallenge();
  }, [id]);

  const handleSubmit = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/challenges/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ challengeId: id, userCode: code }),
    });
    const data = await res.json();
    setResult(data);
  };

  if (!challenge) return <div>Loading challenge...</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{challenge.title}</h1>
      <p className="mb-4">{challenge.description}</p>
      <div className="mb-4">
        <CodeEditor code={code} setCode={setCode} language={challenge.language.toLowerCase()} />
      </div>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Submit Code
      </button>
      {result && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="font-semibold">Test Results:</h2>
          {result.map((test, index) => (
            <div key={index} className="my-1">
              <span className="font-medium">Test {index + 1}:</span> {test.passed ? 'Passed' : 'Failed'}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChallengeDetail;
