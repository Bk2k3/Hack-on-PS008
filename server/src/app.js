import express from 'express';
import cors from 'cors';
import passport from './config/passport.js';
import challengeRoutes from './routes/challengeRoutes.js';
import authRoutes from './routes/auth.js';
import courseRoutes from './routes/courseRoutes.js';

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(passport.initialize());

app.use('/auth', authRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/api/courses', courseRoutes);

app.get('/', (req, res) => {
  res.send('Backend running');
});

export default app;
