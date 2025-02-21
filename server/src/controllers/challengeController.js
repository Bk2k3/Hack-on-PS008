// controllers/challengeController.js
import Challenge from '../models/Challenge.js';
import { executeCode } from '../services/codeExecutionService.js';

export const getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find()
      .select('title description difficulty points language');
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }
    res.json(challenge);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const submitChallenge = async (req, res) => {
  try {
    const { code } = req.body;
    const challenge = await Challenge.findById(req.params.id);
    
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }

    const results = await executeCode(code, challenge.language, challenge.testCases);
    const allTestsPassed = results.every(r => r.passed);

    if (allTestsPassed) {
      // Update user progress
      const user = await User.findById(req.user.id);
      user.completedChallenges.push(challenge._id);
      user.experience += challenge.points;
      
      // Level up if enough XP
      if (user.experience >= user.level * 1000) {
        user.level += 1;
        user.experience -= (user.level - 1) * 1000;
      }
      
      await user.save();
    }

    res.json({ 
      success: allTestsPassed,
      results,
      earnedPoints: allTestsPassed ? challenge.points : 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
