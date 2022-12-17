import express from 'express';
import { createMessage, getAllMessages, getUserMessages, updateMessage, sendNewMessage } from '../controllers/MessagesController.js';
const router = express.Router();

router.get('/', getAllMessages);
router.post('/new', sendNewMessage)
router.get('/:id', getUserMessages);
router.post('/', createMessage);
router.patch('/:id', updateMessage)

export default router;