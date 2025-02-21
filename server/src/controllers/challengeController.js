import Challenge from '../models/Challenge.js';
import { executeUserCode } from '../services/codeExecutionService.js';

export const getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) return res.status(404).json({ message: 'Challenge not found' });
    res.json(challenge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const submitChallenge = async (req, res) => {
  const { challengeId, userCode } = req.body;
  try {
    const challenge = await Challenge.findById(challengeId);
    if (!challenge) return res.status(404).json({ message: 'Challenge not found' });
    const results = await executeUserCode(userCode, challenge.testCases);
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
