// server/src/config/passport.js
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user exists
        let user = await User.findOne({ googleId: profile.id });
        
        if (!user) {
          // Create new user if doesn't exist
          user = await User.create({
            googleId: profile.id,
            email: profile.emails[0].value,
            username: profile.displayName,
            avatar: profile.photos[0].value,
            level: 1,
            experience: 0,
            completedChallenges: [],
            currentStreak: 0,
          });
        }
        
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// server/src/models/User.js
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

