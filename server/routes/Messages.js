import express from 'express';
import { createMessage, getAllMessages, getUserMessages, updateMessage } from '../controllers/MessagesController.js';
const router = express.Router();

router.get('/', getAllMessages);
router.get('/:id', getUserMessages);
router.post('/', createMessage);
router.patch('/:id', updateMessage)

export default router;