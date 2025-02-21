import mongoose from 'mongoose';

const TestCaseSchema = new mongoose.Schema({
  input: { type: String, required: true },
  expectedOutput: { type: String, required: true },
  explanation: { type: String }
});

const ChallengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructions: { type: [String], default: [] },
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  points: { type: Number, required: true },
  language: { type: String, required: true },
  starterCode: { type: String, required: true },
  testCases: [TestCaseSchema],
  solution: { type: String },
  category: { type: String }
});

export default mongoose.model('Challenge', ChallengeSchema);
