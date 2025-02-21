import express from 'express';
import { getChallenges, submitChallenge } from '../controllers/challengeController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticate, getChallenges);
router.post('/:id/submit', authenticate, submitChallenge);

export default router;
