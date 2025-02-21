import { useState } from 'react';
import CodeEditor from '../editor/CodeEditor';

const ChallengeDetail = ({ challenge, onSubmit }) => {
  const [code, setCode] = useState(challenge.starterCode);

  const handleSubmit = async () => {
    try {
      const result = await onSubmit(code);
      // Handle result
    } catch (error) {
      console.error('Error submitting challenge:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{challenge.title}</h2>
        <p className="text-gray-600">{challenge.description}</p>
      </div>

      <div className="bg-white rounded-lg p-4 border">
        <h3 className="font-medium mb-2">Instructions:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {challenge.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>

      <CodeEditor
        value={code}
        onChange={setCode}
        language={challenge.language}
        height="400px"
      />

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Submit Solution
        </button>
      </div>
    </div>
  );
};

export default ChallengeDetail;
