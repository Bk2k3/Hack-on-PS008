import express from 'express';
import session from 'express-session';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import passport from 'passport';
import authRoutes from './routes/auth.js';
import challengeRoutes from './routes/challengeRoutes.js';
import './config/passport.js'; // Ensure passport configuration is loaded

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Your client's URL
    credentials: true,
  })
);

app.use(helmet());
app.use(express.json());

// Setup express-session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true if using HTTPS
    maxAge: 1000 * 60 * 60 * 24, // e.g., 1 day
  },
}));

// Initialize Passport and its session support
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes);
app.use('/api/challenges', challengeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
