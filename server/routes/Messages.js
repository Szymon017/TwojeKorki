import express from 'express';
import { createAMessage } from '../controllers/MessagesController.js';
const router = express.Router();

router.get('/');
router.get('/:id');
router.post('/', createAMessage);

export default router;