import Challenge from '../models/Challenge.js';
import { executeCode } from '../services/codeExecutionService.js';

export const getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (error) {
    console.error('Error fetching challenges:', error);
    res.status(500).json({ error: 'Failed to fetch challenges' });
  }
};

export const submitChallenge = async (req, res) => {
  const { code } = req.body;
  const challengeId = req.params.id;
  
  try {
    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }
    
    const results = await Promise.all(challenge.testCases.map(async (testCase) => {
      const output = await executeCode(code, testCase.input, challenge.language);
      const passed = output.trim() === testCase.expectedOutput.trim();
      return {
        input: testCase.input,
        expected: testCase.expectedOutput,
        actual: output,
        passed,
        explanation: testCase.explanation
      };
    }));

    const passedCount = results.filter(r => r.passed).length;
    const totalTests = challenge.testCases.length;
    const earnedPoints = Math.floor((passedCount / totalTests) * challenge.points);

    res.json({ success: passedCount === totalTests, results, earnedPoints });
  } catch (error) {
    console.error('Error in submitChallenge:', error);
    res.status(500).json({ error: 'Failed to submit challenge' });
  }
};
