// middleware/auth.js
export const authenticateUser = async (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Not authenticated' });
      }
      next();
    } catch (error) {
      res.status(401).json({ error: 'Authentication failed' });
    }
  };