import React, { useState } from 'react';
import CodeEditor from '../editor/CodeEditor';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const ChallengeDetail = ({ challenge, onSubmit }) => {
  const [code, setCode] = useState(challenge.starterCode);
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleSubmit = async () => {
    setIsRunning(true);
    try {
      const result = await onSubmit(code);
      setOutput(result);
    } catch (error) {
      console.error('Error submitting challenge:', error);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{challenge.title}</h2>
        <p className="text-gray-600">{challenge.description}</p>
      </div>
      {challenge.instructions && challenge.instructions.length > 0 && (
        <div className="bg-white rounded-lg p-4 border">
          <h3 className="font-medium mb-2">Instructions:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {challenge.instructions.map((inst, idx) => (
              <li key={idx}>{inst}</li>
            ))}
          </ul>
        </div>
      )}
      <CodeEditor value={code} onChange={setCode} language={challenge.language} height="400px" />
      <div className="flex justify-end">
        <Button onClick={handleSubmit} disabled={isRunning} className="bg-blue-600 hover:bg-blue-700">
          {isRunning ? 'Running...' : 'Submit Solution'}
        </Button>
      </div>
      {output && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Test Results</h3>
          <div className="space-y-2">
            {output.results.map((result, idx) => (
              <Alert key={idx} variant={result.passed ? "success" : "destructive"}>
                <AlertTitle>Test Case {idx + 1}</AlertTitle>
                <AlertDescription>
                  {result.passed
                    ? 'Passed ✓'
                    : `Failed ✗ - Expected ${result.expected}, got ${result.actual}`}
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengeDetail;
