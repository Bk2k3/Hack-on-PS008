import mongoose from 'mongoose';

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  points: { type: Number, default: 0 },
  language: { type: String, required: true },
  description: { type: String, required: true },
  starterCode: { type: String },
  testCases: [
    {
      input: mongoose.Schema.Types.Mixed,
      expectedOutput: mongoose.Schema.Types.Mixed,
    }
  ],
  hints: [String],
});

const Challenge = mongoose.model('Challenge', challengeSchema);
export default Challenge;
