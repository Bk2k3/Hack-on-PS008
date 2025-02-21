import express from 'express';
import { getCourses } from '../controllers/courseController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticate, getCourses);

export default router;
