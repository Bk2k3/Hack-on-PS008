import express from 'express';
import passport from 'passport';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const router = express.Router();

// Initiate Google OAuth login
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'], session: false })
);

// OAuth callback: generate JWT and redirect to client dashboard
// server/src/routes/auth.js - update the callback route
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id, email: req.user.email },
      process.env.SESSION_SECRET,
      { expiresIn: '24h' }
    );
    res.redirect(`${process.env.CLIENT_URL}/login?token=${token}`);
  }
);

// Endpoint to get current user info
router.get('/me', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.SESSION_SECRET);
    res.json(decoded);
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Logout endpoint (client should clear the token)
router.get('/logout', (req, res) => {
  res.redirect(`${process.env.CLIENT_URL}/login`);
});

export default router;
