import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  username: String,
  avatar: String,
  level: { type: Number, default: 1 },
  experience: { type: Number, default: 0 },
  completedChallenges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' }],
  currentStreak: { type: Number, default: 0 },
  lastActive: { type: Date, default: Date.now },
});

export default mongoose.model('User', userSchema);
