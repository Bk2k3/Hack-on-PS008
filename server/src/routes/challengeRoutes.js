import express from 'express';
import { getChallenges, getChallengeById, submitChallenge } from '../controllers/challengeController.js';

const router = express.Router();

router.get('/', getChallenges);
router.get('/:id', getChallengeById);
router.post('/submit', submitChallenge);

export default router;
