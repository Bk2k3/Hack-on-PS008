import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  googleId: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  points: { type: Number, default: 0 }
});

export default mongoose.model('User', UserSchema);
