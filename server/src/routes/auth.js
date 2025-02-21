import express from 'express';
import passport from 'passport';
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  (req, res) => {
    const token = req.user.token;
    res.redirect(`${process.env.CLIENT_URL || 'http://localhost:3000'}/login?token=${token}`);
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default router;
