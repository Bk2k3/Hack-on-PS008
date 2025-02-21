import express from 'express';
import { getChallenges, getChallengeById, submitChallenge } from '../controllers/challengeController.js';
import { authenticateUser } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateUser, getChallenges);
router.get('/:id', authenticateUser, getChallengeById);
router.post('/:id/submit', authenticateUser, submitChallenge);

export default router;
