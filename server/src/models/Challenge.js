import mongoose from 'mongoose';

const testCaseSchema = new mongoose.Schema({
  input: String,
  expectedOutput: String,
  isHidden: { type: Boolean, default: false }
});

const challengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  language: {
    type: String,
    enum: ['javascript', 'python', 'html'],
    required: true
  },
  starterCode: {
    type: String,
    required: true
  },
  solution: {
    type: String,
    required: true
  },
  testCases: [testCaseSchema],
  hints: [String],
  completedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Challenge', challengeSchema);
